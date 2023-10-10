$(document).ready(function () {
    $('#example').DataTable({
        ajax: './JQuery/details.txt',
        columns: [
            { data: 'firstname' },
            { data: 'lastname' },
            { data: 'dob' },
            { data: 'mobile' },
            { data: 'email' },
            { data: 'address' },
        ],
    });
});