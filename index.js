function redirectToPage(element) {
  // Get the destination from the data-destination attribute
  var destination = element.getAttribute('data-destination');

  // Check if the destination is an email address
  if (destination.startsWith('mailto:')) {
    // Open the default email client with the specified email address
    window.location.href = destination;
  } else {
    // Navigate to the specified page
    window.location.href = destination;
  }
}

