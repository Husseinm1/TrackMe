$('#navbar').load('navbar.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];


$('#send-command').on('click', function() 
{const command = $('#command').val();
console.log(`command is: ${command}`)
;});

devices.forEach(function(device)
 {  $('#devices tbody').append
 ( `   <tr>     
       <td>${device.user}</td>     
        <td>${device.name}</td>   
      </tr>`  );
 });

$('#add-device').on('click', function()
 {const user = $('#user').val();
 const name = $('#name').val();  
 devices.push({ user, name });
 localStorage.setItem('devices', JSON.stringify(devices));
 location.href = ' /';
});





