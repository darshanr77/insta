// app/components/programs.tsx

export const programs = [
  {
    id: "p1",
    title: "Program 1: HTML Basic Web Page",
    height: "h-72",
    code: String.raw`
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>

<body>


    <marquee>Basic HTML Tags</marquee>

   
    <h1>This is Heading 1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is Heading 3</h3>
    <h4>This is Heading 4</h4>
    <h5>This is Heading 5</h5>
    <h6>This is Heading 6</h6>

   
    <p>This is a simple paragraph used to demonstrate HTML paragraph tag.</p>

    
    <hr>

    This is first line <br>
    This is second line

  
    <blockquote>
        Learning HTML is the first step towards web development.
    </blockquote>

   
    <pre>
HTML
     preserves
            spaces
    and line breaks
    </pre>

  
    <b>Bold Text</b><br>
    <u>Underlined Text</u><br>
    Water formula: H<sub>2</sub>O <br>
    (a+b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2ab

</body>
</html>

`
  },

  {
    id: "p2",
    title: "Program 2: HTML Table (Time Table)",
    height: "h-72",
    code: String.raw`
<!DOCTYPE html>
<html>
<head>
    <title>Time Table</title>

    <style>
        table {
            width: 80%;
            margin: auto;
            border-collapse: collapse;
            font-family: Arial;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        .lab {
            background-color: #ff9999;   /* Lab hours */
        }

        .elective {
            background-color: #99ff99;  /* Elective hours */
        }

        .rowcolor {
            background-color: #f2f2f2;  /* Row color */
        }

        tfoot {
            background-color: #ddd;
            font-weight: bold;
        }
    </style>
</head>

<body>

<h2 align="center">Class Time Table</h2>

<table>
   
    <thead>
        <tr>
            <th>Day / Time</th>
            <th>9:00 - 10:00</th>
            <th>10:00 - 11:00</th>
            <th>11:00 - 12:00</th>
            <th>12:00 - 1:00</th>
        </tr>
    </thead>

 
    <tbody>
        <tr class="rowcolor">
            <td>Monday</td>
            <td>Maths</td>
            <td class="lab" colspan="2">Web Lab</td>
            <td>Physics</td>
        </tr>

        <tr>
            <td>Tuesday</td>
            <td>English</td>
            <td>Maths</td>
            <td class="elective">Elective</td>
            <td>Chemistry</td>
        </tr>

        <tr class="rowcolor">
            <td>Wednesday</td>
            <td rowspan="2" class="lab">Lab</td>
            <td>Physics</td>
            <td>Maths</td>
            <td class="elective">Elective</td>
        </tr>

        <tr>
            <td>Thursday</td>
            <td>Chemistry</td>
            <td>English</td>
            <td>Maths</td>
        </tr>
    </tbody>

    
    <tfoot>
        <tr>
            <td colspan="5">End of Time Table</td>
        </tr>
    </tfoot>
</table>

</body>
</html>


`
  },

  {
    id: "p3",
    title: "Program 3: CSS Styled Web Page",
    height: "h-64",
    code: String.raw`
<!DOCTYPE html>
<html>
<head>
    <title>External CSS Demo</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<h2>External CSS Example</h2>

<h3 class="heading">This is H3 with Class Selector</h3>

<hr id="line">

<div>
    <p>This paragraph is inside a div.</p>
    <span>This is span text</span>
</div>

<p>This paragraph shows pseudo-element.</p>

<time datetime="2025-01-20">20 January 2025</time>
<br><br>

<img src="https://via.placeholder.com/150">

<br><br>
<a href="#">Hover over this link</a>

</body>
</html>


`
  },

  {
    id: "p4",
    title: "Program 4: HTML Registration Form",
    height: "h-64",
    code: String.raw`
<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>

    <style>
        body {
            background-color: #f0f8ff;
            font-family: Arial;
            color: #333;
        }

        h2 {
            text-align: center;
            color: darkblue;
        }

        table {
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
        }

        td {
            padding: 10px;
            font-size: 16px;
            color: #000080;
        }

        input, select {
            padding: 5px;
            font-size: 14px;
        }

        .btn {
            background-color: green;
            color: white;
            font-size: 16px;
            padding: 8px 20px;
            border: none;
            cursor: pointer;
        }
    </style>
</head>

<body>

<h2>Student Registration Form</h2>

<form>
    <table>
        <tr>
            <td>Name:</td>
            <td><input type="text" placeholder="Enter Name"></td>
        </tr>

        <tr>
            <td>Email:</td>
            <td><input type="email" placeholder="Enter Email"></td>
        </tr>

        <tr>
            <td>Password:</td>
            <td><input type="password"></td>
        </tr>

        <tr>
            <td>Gender:</td>
            <td>
                <input type="radio" name="g"> Male
                <input type="radio" name="g"> Female
            </td>
        </tr>

        <tr>
            <td>Course:</td>
            <td>
                <select>
                    <option>CSE</option>
                    <option>ISE</option>
                    <option>ECE</option>
                </select>
            </td>
        </tr>

        <tr>
            <td>Date of Birth:</td>
            <td><input type="date"></td>
        </tr>

        <tr>
            <td colspan="2" align="center">
                <input type="submit" class="btn" value="Register">
            </td>
        </tr>
    </table>
</form>

</body>
</html>

`
  },

  {
    id: "p5",
    title: "Program 5: News Paper",
    height: "h-64",
    code: String.raw`
<!DOCTYPE html>

<head>
    <title>Newspaper Page | vtucode</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            padding: 20px;
            font-family: 'Arial', sans-serif;
            color: #000000;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            margin-bottom: 30px;
            border-radius: 10px;
            align-items: center;
            background-color: #7b38f7;
            color: #fff;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        header a {
            font-size: 25px;
            font-weight: 600;
            color: #fff;
            text-decoration: none;
        }


        nav {
            display: flex;
            gap: 20px;
            color: #fff;
            text-align: center;
        }

        nav a {
            font-size: 18px;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underline;
        }

        .content {
            display: flex;
            justify-content: space-between;
            flex: 1;
            margin: auto;
            padding: 20px 0;
            gap: 20px;
            position: relative;
        }

        .main-content {
            cursor: pointer;
            flex: 1;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            background-color: #fff;
            border-radius: 12px;
            padding: 25px;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        }

        aside {
            border: 1px solid #ccc;
            padding: 20px;
            width: 350px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: -webkit-sticky;
            position: sticky;
            top: 20px;
            color: #333;
            right: 0;
            margin-left: 20px;
        }


        .related-news h3 {
            text-align: center;
            border-radius: 7px;
            padding: 8px;
            background: #000;
            color: #ffffff;
            font-size: 1.4em;
            margin-bottom: 15px;
        }

        .related-news ul {
            list-style: outside;
            padding: 7px;
            margin: 0;
        }

        .related-news li {
            margin-bottom: 12px;
        }

        .related-news a {
            text-decoration: none;
            color: #7b38f7;
            font-weight: bold;
            transition: color 0.3s ease;
        }

        .related-news a:hover {
            text-decoration: underline;
        }


        footer {
            border-radius: 10px;
            background-color: #7b38f7;
            color: #fff;
            padding: 20px;
            font-weight: 500;
            text-align: center;
            margin-top: auto;
            font-size: 18px;
        }

        article {
            transition: all 0.3s ease;
            background-color: #fff;
            padding: 15px;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
            border-radius: 7px;
            color: #000000;
        }

        figure {
            background-color: #fafafa;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            text-align: center;
            margin: 0;
        }

        figcaption {
            font-size: 0.9em;
            color: #666;
        }

        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        section {
            padding: 20px;
            width: 100%;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        }

        section h2 {
            color: #fff;
            background: #000;
            font-size: 24px;
            border-radius: 10px;
            text-align: center;
            padding: 10px;
            margin-bottom: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        caption {
            font-size: 18px;
            margin-bottom: 10px;
            color: #555;
        }

        thead {
            background-color: #007BFF;
            color: #fff;
        }

        th,
        td {
            padding: 12px;
            text-align: left;
        }

        th {
            font-weight: bold;
        }

        tbody tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tbody tr:hover {
            background-color: #eaeaea;
        }

        @media (max-width: 600px) {

            th,
            td {
                padding: 8px;
                font-size: 14px;
            }
        }

        caption {
            background-color: #d9d9d9;
            padding: 10px;
            font-weight: bold;
            border-bottom: 2px solid #ddd;
            border-radius: 8px 8px 0 0;
            font-size: 1.1em;
            color: #333;
        }

        section {
            margin-top: 40px;
            margin-bottom: 50px;
        }

        article h2 {
            color: #7b38f7;
            font-size: 1.3em;
            margin-bottom: 12px;
        }

        article p {
            text-align: left;
            line-height: 1.2;
            margin-top: 10px;
        }


        article:hover {
            background-color: #e7ddfb;
        }

        @media (max-width: 768px) {
            .content {
                flex-direction: column;
                padding: 10px;
            }

            aside {
                width: 100%;
                margin-top: 20px;
                position: static;
                margin-left: 0;
            }

            .main-content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>
    <header>

        <a href="#">Newspaper</a>

        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Services</a>
            <a href="#">Marketing</a>
            <a href="#">Updates</a>
        </nav>

    </header>

    <div class="content">
        <main class="main-content">
            <article>
                <h2>Article Title 1</h2>
                <figure>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
                    <figcaption>Image Caption</figcaption>
                </figure>
                <p>This is the content of the first article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <article>
                <h2>Article Title 2</h2>
                <figure>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
                    <figcaption>Image Caption</figcaption>
                </figure>
                <p>This is the content of the second article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <article>
                <h2>Article Title 3</h2>
                <figure>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
                    <figcaption>Image Caption</figcaption>
                </figure>
                <p>This is the content of the third article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <article>
                <h2>Article Title 4</h2>
                <figure>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
                    <figcaption>Image Caption</figcaption>
                </figure>
                <p>This is the content of the fourth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <article>
                <h2>Article Title 5</h2>
                <figure>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
                    <figcaption>Image Caption</figcaption>
                </figure>
                <p>This is the content of the fourth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>


            <article>
                <h2>Article Title 6</h2>
                <figure>
                    <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
                    <figcaption>Image Caption</figcaption>
                </figure>
                <p>This is the content of the fourth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

        </main>



        <aside class="related-news">
            <h3>Related News</h3>
            <ul>
                <li><a href="#">Related News 1</a></li>
                <li><a href="#">Related News 2</a></li>
                <li><a href="#">Related News 3</a></li>
            </ul>
        </aside>

    </div>

    <section>
        <h2>Recent Posts</h2>
        <div>
            <table>
                <caption>List of Posts</caption>
                <thead>
                    <tr>
                        <th>Post Title</th>
                        <th>Date</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Post 1</td>
                        <td>2024-08-30</td>
                        <td>Author 1</td>
                    </tr>
                    <tr>
                        <td>Post 2</td>
                        <td>2024-08-29</td>
                        <td>Author 2</td>
                    </tr>
                    <tr>
                        <td>Post 3</td>
                        <td>2024-08-28</td>
                        <td>Author 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <footer>
        <p>© 2024 Newspaper. All rights reserved.</p>
    </footer>
</body>

</html>
`
  },

   {
    id: "p6",
    title: "Program 6 : simple calculator",
    height: "h-72",
    code: String.raw`
<!DOCTYPE html>
<html>
<head>
<title>Calculator</title>

<style>
    body {
        background: #f2f2f2;
        font-family: Arial;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .box {
        background: white;
        padding: 20px;
        width: 260px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    input {
        width: 90%;
        padding: 8px;
        margin: 6px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

    .btns button {
        padding: 8px 12px;
        margin: 4px;
        border: none;
        border-radius: 5px;
        background: #4CAF50;
        color: white;
        cursor: pointer;
        font-size: 14px;
    }

    .btns button:hover {
        background: #45a049;
    }

    p {
        margin-top: 15px;
        font-size: 16px;
        font-weight: bold;
    }
</style>
</head>

<body>

<div class="box">
    <h3>Simple Calculator</h3>

    <input id="a" placeholder="Number 1">
    <input id="b" placeholder="Number 2">

    <div class="btns" id="buttons"></div>

    <p>Result: <span id="r">0</span></p>
</div>

<script>
    let ops = ["+", "-", "*", "/", "%", "^", "sq"];

    ops.map(x => {
        let btn = document.createElement("button");
        btn.innerText = x;
        btn.onclick = () => calc(x);
        buttons.appendChild(btn);
    });

    function calc(op) {
        let x = Number(a.value);
        let y = Number(b.value);
        let res = 0;

        if (op == "+") res = x + y;
        if (op == "-") res = x - y;
        if (op == "*") res = x * y;
        if (op == "/") res = x / y;
        if (op == "%") res = x % y;
        if (op == "^") res = x ** y;
        if (op == "sq") res = x * x;

        r.innerText = res;
    }
</script>

</body>
</html>



`
  },


  {
    id: "p7",
    title: "Program 7: PHP Visitor Counter",
    height: "h-56",
    code: String.raw`
<!DOCTYPE html>
<html>
<head>
<title>JSON Program</title>

<style>
    body {
        font-family: Arial;
        background: #f2f2f2;
        text-align: center;
    }

    .box {
        background: white;
        width: 350px;
        margin: 20px auto;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    textarea, input {
        width: 90%;
        margin: 6px;
        padding: 6px;
    }

    button {
        padding: 6px 12px;
        margin: 5px;
        cursor: pointer;
    }

    pre {
        background: #eee;
        padding: 8px;
        text-align: left;
        overflow-x: auto;
    }
</style>
</head>

<body>

<div class="box">
    <h3>a) JSON → JavaScript Object</h3>
    <textarea id="jsonText">{ "name":"Rahul", "age":20 }</textarea>
    <button onclick="jsonToObj()">Convert</button>
    <pre id="objOut"></pre>
</div>

<div class="box">
    <h3>b) JSON Date → JavaScript Date</h3>
    <textarea id="jsonDate">{ "date":"2024-01-20" }</textarea>
    <button onclick="jsonToDate()">Convert</button>
    <p id="dateOut"></p>
</div>

<div class="box">
    <h3>c) JSON ↔ CSV</h3>
    <textarea id="jsonCsv">[{"name":"A","age":20},{"name":"B","age":22}]</textarea>
    <button onclick="jsonToCsv()">JSON → CSV</button>
    <button onclick="csvToJson()">CSV → JSON</button>
    <pre id="csvOut"></pre>
    <pre id="jsonOut"></pre>
</div>

<div class="box">
    <h3>d) Hash from String</h3>
    <input id="str" placeholder="Enter text">
    <button onclick="hashText()">Generate Hash</button>
    <pre id="hashOut"></pre>
</div>

<script>
/* a) JSON to Object */
function jsonToObj() {
    let obj = JSON.parse(jsonText.value);
    objOut.innerText = JSON.stringify(obj, null, 2);
}

/* b) JSON to Date */
function jsonToDate() {
    let obj = JSON.parse(jsonDate.value);
    let d = new Date(obj.date);
    dateOut.innerText = d;
}

/* c) JSON to CSV */
function jsonToCsv() {
    let arr = JSON.parse(jsonCsv.value);
    let keys = Object.keys(arr[0]);
    let csv = keys.join(",") + "\n";
    arr.forEach(o => csv += keys.map(k => o[k]).join(",") + "\n");
    csvOut.innerText = csv;
}

/* c) CSV to JSON */
function csvToJson() {
    let rows = csvOut.innerText.trim().split("\n");
    let keys = rows[0].split(",");
    let json = rows.slice(1).map(r => {
        let obj = {};
        r.split(",").forEach((v,i)=>obj[keys[i]]=v);
        return obj;
    });
    jsonOut.innerText = JSON.stringify(json, null, 2);
}

/* d) Hash from string */
function hashText() {
    let data = new TextEncoder().encode(str.value);
    crypto.subtle.digest("SHA-256", data).then(h => {
        let hex = Array.from(new Uint8Array(h))
            .map(b => b.toString(16).padStart(2,"0"))
            .join("");
        hashOut.innerText = hex;
    });
}
</script>

</body>
</html>

`
  },

  {
    id: "p8a",
    title: "Program 8A: jQuery DOM Manipulation",
    height: "h-56",
    code: String.raw`
<?php
$counterFile = "counter.txt";

if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "0");
}

$currentCount = file_get_contents($counterFile);

$newCount = $currentCount + 1;

file_put_contents($counterFile, $newCount);
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <title>Visitor Counter | vtucode</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f9;
            color: #333;
        }

        .container {
            background: #fff;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin: 0 auto;
            width: 60%;
        }

        h1 {
            font-size: 2.5em;
            margin: 0;
        }

        p {
            font-size: 1.2em;
            color: #555;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Welcome to Our Website!</h1>
        <p>You are visitor number: <strong><?php echo $newCount; ?></strong></p>
    </div>
</body>

</html>
`
  },

  {
    id: "p8b",
    title: "Program 8B: AJAX with JSON",
    height: "h-56",
    code: String.raw`
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "students";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM students";
$result = $conn->query($sql);

$students = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
}

function selectionSort(&$arr, $key)
{
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
        $minIndex = $i;
        for ($j = $i + 1; $j < $n; $j++) {
            if ($arr[$j][$key] < $arr[$minIndex][$key]) {
                $minIndex = $j;
            }
        }

        $temp = $arr[$i];
        $arr[$i] = $arr[$minIndex];
        $arr[$minIndex] = $temp;
    }
}

selectionSort($students, 'name');
?>

<!DOCTYPE html>

<head>
    <title>Sorted Student Records | vtucode</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h2 {
            text-align: center;
            color: #4A90E2;
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }

        th,
        td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #4A90E2;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }

        tr {
            transition: background-color 0.3s ease;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        td {
            font-size: 0.9em;
            color: #555;
        }

        @media (max-width: 768px) {

            table,
            th,
            td {
                display: block;
                width: 100%;
            }

            th,
            td {
                box-sizing: border-box;
            }

            tr {
                margin-bottom: 15px;
                display: block;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            th {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }

            td {
                border: none;
                position: relative;
                padding-left: 50%;
                text-align: right;
            }

            td:before {
                content: attr(data-label);
                position: absolute;
                left: 0;
                width: 50%;
                padding-left: 15px;
                font-weight: bold;
                text-align: left;
                text-transform: uppercase;
                color: #4A90E2;
            }
        }
    </style>
</head>

<body>

    <h2>Sorted Student Records by Name</h2>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>USN</th>
                <th>Branch</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($students as $student): ?>
                <tr>
                    <td data-label="ID"><?php echo htmlspecialchars($student['id']); ?></td>
                    <td data-label="Name"><?php echo htmlspecialchars($student['name']); ?></td>
                    <td data-label="USN"><?php echo htmlspecialchars($student['usn']); ?></td>
                    <td data-label="Branch"><?php echo htmlspecialchars($student['branch']); ?></td>
                    <td data-label="Email"><?php echo htmlspecialchars($student['email']); ?></td>
                    <td data-label="Address"><?php echo htmlspecialchars($student['address']); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

</body>

</html>
`
  },

  {
    id: "p9",
    title: "Program 9: Node.js Server Program",
    height: "h-48",
    code: String.raw`

    <!DOCTYPE html>
<html>
<head>
    <title>jQuery Program</title>

 
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <style>
        body {
            font-family: Arial;
            background-color: #f2f2f2;
            text-align: center;
        }

        .box {
            width: 200px;
            height: 100px;
            background-color: skyblue;
            margin: 20px auto;
            line-height: 100px;
        }

        button {
            padding: 6px 12px;
            margin: 5px;
            cursor: pointer;
        }

        ul {
            list-style: none;
            padding: 0;
        }
    </style>
</head>

<body>

<h2>jQuery Demo</h2>


<p id="para">This is a paragraph.</p>
<button id="addPara">Append Paragraph</button>


<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
<button id="addList">Append List Item</button>


<div class="box" id="box">Animate Me</div>
<button id="animate">Animate Div</button>

<script>
$(document).ready(function(){

    // a) Append content to paragraph
    $("#addPara").click(function(){
        $("#para").append(" Added text");
    });

    $("#addList").click(function(){
        $("#list").append("<li>New Item</li>");
    });

  
    $("#animate").click(function(){
        $("#box").animate({
            width: "300px"
        }, 1000, function(){
            $(this).css("background-color", "orange");
        });
    });

});
</script>

</body>
</html>


`
  },

  {
    id: "p10",
    title: "Program 10: Full Stack Mini Project",
    height: "h-40",
    code: String.raw`

   <!DOCTYPE html>
<html>
<head>
<title>AJAX Program</title>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<style>
    body {
        font-family: Arial;
        background: #f2f2f2;
        text-align: center;
    }

    .box {
        background: white;
        width: 400px;
        margin: 20px auto;
        padding: 15px;
        border-radius: 8px;
    }

    button {
        padding: 6px 12px;
        margin: 5px;
        cursor: pointer;
    }

    pre {
        background: #eee;
        padding: 10px;
        text-align: left;
    }
</style>
</head>

<body>

<h2>AJAX Demonstration</h2>

<div class="box">
    <h3>a) AJAX without jQuery</h3>
    <button onclick="loadText()">Load Text</button>
    <pre id="out1"></pre>
</div>

<div class="box">
    <h3>b) AJAX with jQuery</h3>
    <button id="jqLoad">Load Text</button>
    <pre id="out2"></pre>
</div>

<div class="box">
    <h3>c) getJSON()</h3>
    <button id="getJson">Load JSON</button>
    <pre id="out3"></pre>
</div>

<div class="box">
    <h3>d) parseJSON()</h3>
    <button id="parseJson">Parse JSON</button>
    <pre id="out4"></pre>
</div>

<script>
function loadText() {
    let x = new XMLHttpRequest();
    x.onload = function() {
        out1.innerText = this.responseText;
    }
    x.open("GET", "data.txt");
    x.send();
}

$("#jqLoad").click(function(){
    $.ajax({
        url: "data.txt",
        success: function(data){
            $("#out2").text(data);
        }
    });
});

$("#getJson").click(function(){
    $.getJSON("data.json", function(data){
        $("#out3").text("Name: " + data.name + ", Age: " + data.age);
    });
});

$("#parseJson").click(function(){
    let txt = '{"city":"Bangalore","state":"Karnataka"}';
    let obj = $.parseJSON(txt);
    $("#out4").text(obj.city + " - " + obj.state);
});
</script>

</body>
</html>

This content is loaded using AJAX.

{
    "name": "Rahul",
    "age": 20
}


`
}
];