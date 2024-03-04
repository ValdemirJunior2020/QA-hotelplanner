function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    
    // Replace 'qa2024' with the actual password you want
    if (enteredPassword === 'qa2024') {
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('links').style.display = 'block';

        // Add your links dynamically here, with styling for spacing and target="_blank"
        document.getElementById('links').innerHTML += `
           
            <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=831364116" style="margin-bottom: 10px; display: block;" target="_blank">CONCENTRIX</a>
            <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=1603698297" style="margin-bottom: 10px; display: block;" target="_blank">BUWELO</a>
            <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=392631628" style="margin-bottom: 10px; display: block;" target="_blank">BUWELO Phi.</a>
            <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=1980953920" style="margin-bottom: 10px; display: block;" target="_blank">WNS</a>
            <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=982878336" style="margin-bottom: 10px; display: block;" target="_blank">Teleperformance</a>
            <a href="https://drive.google.com/file/d/1yUR_25xjqSukP9nVj0hvsKX0pYMMkaZi/view?usp=sharing" style="margin-bottom: 10px; display: block;" target="_blank">Training Guide</a>
           
            <a href="slack://open" style="margin-bottom: 10px; display: block;" target="_blank">Open Slack</a>
            
        `;
    } else {
        alert('Incorrect password. Please try again, or ask Junior for help .');
    }
}
