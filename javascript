<p>Stop by Cambridge Hackspace on a Tuesday night, and take the Smartphone Test and win a free prize.</p>

<p>Go ahead: Give it a whirl!</p>

<p><button class="btn btn-primary btn-lg" id="functionButton" onclick="triggerParticleFunction()">Give me my prize!</button><script type="text/javascript">

    function triggerParticleFunction() {

        var deviceID = "280022000a51353335323536";
//280022000a51353335323536 -- Photon5
//4b0026000b51343334363138 -- electron
        var accessToken = "55124b34fd82a5e272dc8772438e81e14213710e";
        var sayhiFunctionName = "yes";
//was "sayhi"

        var http = new XMLHttpRequest();
        var url = "https://api.spark.io/v1/devices/" + deviceID + "/" + sayhiFunctionName + "/" + "?access_token=" + accessToken;
        http.open("POST", url, true);

        http.send();
    }
    </script></p>

<p>OR....</p>

<p><label>The secret word: </label><br />
<input id="secret" onchange="displaySecret()" type="text" /><br />
<script>
        function displaySecret() {
            document.getElementById("demo").innerHTML = document.getElementById("secret").value;
        }
    </script></p>

<p id="demo">&nbsp;</p>
