const loanForm = document.getElementById('loan-form');

const clearError = () => {
  // Find the error object and remove it.
  document.querySelector('.alert').remove();
};

const showError = (err) => {
  const heading = document.querySelector('.heading');
  const card = document.querySelector('.card');
  // Create error object as a simple div.
  const errDiv = document.createElement('div');
  // Add styles to the error object.
  errDiv.className = 'alert alert-danger';
  // Add text node to the error object.
  errDiv.appendChild(document.createTextNode(err));
  // Insert error object before heading.
  card.insertBefore(errDiv, heading);
  // Clear error after 3 seconds.
  setTimeout(clearError, 3000);
};

const calcResults = (e) => {
  e.preventDefault();
  console.log('calculating...');

  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const montlyPayment = document.getElementById('montly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // compute montly payments.
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    montlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please check your numbers.');
  }
};

loanForm.addEventListener('submit', calcResults);
