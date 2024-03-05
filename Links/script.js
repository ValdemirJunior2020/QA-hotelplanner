// Initialize a counter object to store click counts for each link
const linkClickCounts = {};

function checkPassword() {
    const enteredPassword = document.getElementById('password').value;

    // Replace 'qa2024' with the actual password you want
    if (enteredPassword === 'qa2024') {
        document.getElementById('passwordForm').style.display = 'none';
        document.getElementById('links').style.display = 'block';

        // Add your links dynamically here, with styling for spacing and target="_blank"
        document.getElementById('links').innerHTML += `
           
            <div>
                <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=831364116" onclick="countClick('CONCENTRIX')" style="margin-bottom: 10px; display: block;" target="_blank">CONCENTRIX</a>
                <span id="clickCount_CONCENTRIX">0</span>
            </div>
            <div>
                <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=1603698297" onclick="countClick('BUWELO')" style="margin-bottom: 10px; display: block;" target="_blank">BUWELO</a>
                <span id="clickCount_BUWELO">0</span>
            </div>
            <div>
                <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=392631628" onclick="countClick('BUWELO Phi.')" style="margin-bottom: 10px; display: block;" target="_blank">BUWELO Phi.</a>
                <span id="clickCount_BUWELO Phi.">0</span>
            </div>
            <div>
                <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=1980953920" onclick="countClick('WNS')" style="margin-bottom: 10px; display: block;" target="_blank">WNS</a>
                <span id="clickCount_WNS">0</span>
            </div>
            <div>
                <a href="https://docs.google.com/spreadsheets/d/1teUVnlSQB4PcpCEukvh20Pefu8aWtMrw5nnfGagSTrM/edit#gid=982878336" onclick="countClick('Teleperformance')" style="margin-bottom: 10px; display: block;" target="_blank">Teleperformance</a>
                <span id="clickCount_Teleperformance">0</span>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1yUR_25xjqSukP9nVj0hvsKX0pYMMkaZi/view?usp=sharing" onclick="countClick('Training Guide')" style="margin-bottom: 10px; display: block;" target="_blank">Training Guide</a>
                <span id="clickCount_Training Guide">0</span>
            </div>
            <div>
                <a href="slack://open" onclick="countClick('Open Slack')" style="margin-bottom: 10px; display: block;" target="_blank">Open Slack</a>
                <span id="clickCount_Open Slack">0</span>
            </div>
        `;
    } else {
        alert('Incorrect password. Please try again, or ask Junior for help.');
    }
}

// Function to count clicks for each link
function countClick(linkName) {
    // Check if the link has an entry in the counter object
    if (linkClickCounts.hasOwnProperty(linkName)) {
        // Increment the click count for the link
        linkClickCounts[linkName]++;
    } else {
        // If the link is clicked for the first time, initialize the click count to 1
        linkClickCounts[linkName] = 1;
    }

    // Update the click count next to the corresponding link
    document.getElementById(`clickCount_${linkName}`).innerText = linkClickCounts[linkName];
}
