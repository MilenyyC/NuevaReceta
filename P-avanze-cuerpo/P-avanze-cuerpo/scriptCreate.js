document.getElementById('pinImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagePreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('pinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission here
    alert('Pin created successfully!');
});