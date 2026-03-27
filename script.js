const outputEl = document.getElementById('output');
const historyEl = document.getElementById('history');
const buttons = document.querySelectorAll('button');

let current = '0';
let memory = null;
let activeOp = null;
let justEvaluated = false;

const calculate = (a, b, op) => {
  const x = Number(a);
  const y = Number(b);
  if (Number.isNaN(x) || Number.isNaN(y)) return '0';

  switch (op) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    case '/': return y === 0 ? 'Error' : x / y;
    default: return '0';
  }
};

const updateDisplay = (value) => {
  outputEl.value = String(value);
  historyEl.textContent = memory !== null && activeOp ? `${memory} ${activeOp} ${current}` : '';
};

const clearAll = () => {
  current = '0';
  memory = null;
  activeOp = null;
  justEvaluated = false;
  historyEl.textContent = '';
  updateDisplay(current);
};

const handleDigit = (digit) => {
  if (justEvaluated) {
    current = '0';
    justEvaluated = false;
  }
  if (current === '0') current = digit;
  else current += digit;
  updateDisplay(current);
};

const handleDot = () => {
  if (justEvaluated) {
    current = '0';
    justEvaluated = false;
  }
  if (!current.includes('.')) {
    current += '.';
    updateDisplay(current);
  }
};

const handleOperator = (op) => {
  if (activeOp && memory !== null && !justEvaluated) {
    const result = calculate(memory, current, activeOp);
    current = String(result);
    memory = current;
    updateDisplay(current);
  } else {
    memory = current;
  }

  activeOp = op;
  justEvaluated = false;
  current = '0';
  updateDisplay(current);
};

const handleEquals = () => {
  if (!activeOp || memory === null) return;

  const result = calculate(memory, current, activeOp);
  historyEl.textContent = `${memory} ${activeOp} ${current} =`;
  current = String(result);
  memory = null;
  activeOp = null;
  justEvaluated = true;
  updateDisplay(current);
};

const handleDelete = () => {
  if (justEvaluated) return;
  if (current.length <= 1) current = '0';
  else current = current.slice(0, -1);
  updateDisplay(current);
};

buttons.forEach((btn) => {
  const digit = btn.dataset.key;
  const op = btn.dataset.op;
  const dot = btn.dataset.dot;
  const eq = btn.dataset.eq;

  if (digit) {
    btn.addEventListener('click', () => handleDigit(digit));
  } else if (op) {
    btn.addEventListener('click', () => handleOperator(op));
  } else if (dot) {
    btn.addEventListener('click', handleDot);
  } else if (eq) {
    btn.addEventListener('click', handleEquals);
  }
});

document.getElementById('clear').addEventListener('click', clearAll);
document.getElementById('delete').addEventListener('click', handleDelete);

clearAll();
