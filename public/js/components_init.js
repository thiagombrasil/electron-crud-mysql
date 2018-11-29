document.addEventListener('DOMContentLoaded', function() {
    // sidenav init
    var sidenav = document.querySelectorAll('.sidenav');
    var sidenavInstances = M.Sidenav.init(sidenav, null);
    // modal init
    var modal = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modal, {dismissible: false});
});