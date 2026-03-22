<!DOCTYPE html>
<html>
<head>
    <title>Joke Generator</title>
    <style>
        body {
            font-family: Arial;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
        }
        button {
            padding: 12px 30px;
            font-size: 16px;
            cursor: pointer;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background: #764ba2;
        }
        #joke {
            margin-top: 20px;
            font-size: 18px;
            min-height: 60px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>😂 Joke Generator</h1>
        <button onclick="getJoke()">🎲 Get Joke</button>
        <div id="joke">Click button for a joke!</div>
    </div>

    <script>
        function getJoke() {
            fetch('https://official-joke-api.appspot.com/random_joke')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('joke').innerText = data.setup + '\n\n' + data.punchline;
                })
                .catch(error => {
                    document.getElementById('joke').innerText = 'Error loading joke!';
                    console.error(error);
                });
        }
        
        // Auto-load on page load
        getJoke();
    </script>
</body>
</html>
