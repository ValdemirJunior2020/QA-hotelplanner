function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    
    // Replace 'qa2024' with the actual password you want
    if (enteredPassword === 'qa2024') {
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('links').style.display = 'block';

        // Add your links dynamically here, with styling for spacing and target="_blank"
        document.getElementById('links').innerHTML += `
            <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" style="margin-bottom: 10px; display: block;" target="_blank">Old Responses</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3nlEgsKlRQIvxLJwsV4QGyXA3qbsGAH_lC68G25-DlBBjlg/viewform" style="margin-bottom: 10px; display: block;" target="_blank">Form 2024</a>
            <a href="https://drive.google.com/file/d/1yUR_25xjqSukP9nVj0hvsKX0pYMMkaZi/view?usp=sharing" style="margin-bottom: 10px; display: block;" target="_blank">Training Guide</a>
            <a href="https://docs.google.com/spreadsheets/d/1XgZTnQ8nd7V_9tWeRQxE7Yx8B8mzc0GtsciOTm5xhDQ/edit#gid=60603194" style="margin-bottom: 10px; display: block;" target="_blank">ASAP</a>
            <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit?resourcekey#gid=1147589046" style="margin-bottom: 10px; display: block;" target="_blank">New Responses 2024</a>
            <a href="https://docs.google.com/presentation/d/1ceDoOM9o5h_nSmroHRUc-3bwHi6_uusU6HIOqEqhR1c/edit#slide=id.gc6fa3c898_0_0" style="margin-bottom: 10px; display: block;" target="_blank">HP MBR Jim's Link</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6Zo2XXP-otpbMzScXIwSqv3qFYBmsl2OS7Swo389ZpzCG5w/viewform" style="margin-bottom: 10px; display: block;" target="_blank">2023 Form</a>
            <a href="https://docs.google.com/spreadsheets/d/1a-H17ku4-c1y5rG2P2MAFb4Zvgqws7Z3O1FQ_Sem8XY/edit#gid=1243467041" style="margin-bottom: 10px; display: block;" target="_blank">2023 Answers</a>
            <a href="https://q-a-notes.vercel.app/" style="margin-bottom: 10px; display: block;" target="_blank">Dropdown-discriptions 2024</a>
            
        `;
    } else {
        alert('Incorrect password. Please try again, or ask Junior for help .');
    }
}
