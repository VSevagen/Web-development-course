<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="README.css">
</head>
<body>
	<div>
		<h1>Web development</h1>
			<p>This repository will contain information regarding the different sections of HTML as well as CSS. Important points related language will be explained here. </p>
	</div>
	<div>
		<h2>HTML(HyperText Markup Language)</h2>
			<p>HTML describes the structure of a webpage and consists of a series of element which tells tell the browser how to display the elements of the webpage.</p>
	</div>
	<div>
		<h3>Elements</h3>
		<ul>
			<li><strong>&ltbody&gt</strong> tag</li>
			<ul>
				<li>
					<p>The <strong>HTML &ltbody&gt Element</strong> represents the content of an HTML document. There can be only one &ltbody&gt element in a document.<br>
					</p>
				</li>
			</ul>
			<li><strong>&lth1&gt....&lth6&gt</strong> tag</li>
			<ul>
				<li>
					<p>The <strong>HTML &lth1&gt–&lth6&gt</strong> elements represent six levels of section headings. <strong>&lth1&gt</strong> is the highest section level and <strong>&lth6&lt</strong> is the lowest.<br>
				    </p>
				</li>
			</ul>
			<li><strong>&ltp&gt, &ltspan&gt, &ltdiv&gt </strong>tag</li>
			<p>
			<ul>
				<li>
					The HTML <strong>&ltp&gt</strong> element represents a paragraph.
				</li>
				<li>
					The HTML <strong>&ltspan&gt</strong> element is a generic inline container for phrasing content, which does not inherently represent anything.
				</li>
				<li>
					The HTML Content Division element (<strong>&ltdiv&gt</strong>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.
				</li>
			</ul>
		    </p>
			<li><strong>&ltem&gt, &ltstrong&gt </strong>tag</li>
			<p>
			<ul>
				<li>
					The HTML <strong>&ltem&gt</strong> element marks text that has stress emphasis. The <strong>&ltem&gt</strong> element can be nested, with each level of nesting indicating a greater degree of emphasis.
				</li>
				<li>
					The HTML Strong Importance Element (<strong>&ltstrong&gt</strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
				</li>
			</ul>
		    </p>
			<li><strong>&ltbr&gt </strong>tag</li>
			<ul>
				<li>
					<p>The HTML <strong>&ltbr&gt</strong> element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.<br>
					</p>
				</li>
			</ul>
			<li><strong>&ltol&gt, &ltul&gt </strong>tag</li>
			<ul>
				<li>
					<p>Check out the <strong>HTML Lists</strong> section.<br></p>
				</li>
			</ul>
			<li><strong>&ltimg&gt, &ltvideo&gt </strong>tag</li>
			<ul>
				<li>
					<p>The HTML Video element (<strong>&ltvideo&gt</strong>) embeds a media player which supports video playback into the document. You can use <strong>&ltvideo&gt</strong> for audio content as well, but the <strong>&ltaudio&gt</strong> element may provide a more appropriate user experience.<br></p>
				</li>
			</ul>
		</ul>
		<h3>HTML Lists</h3>
		<ol>
			<li><strong>Ordered lists</strong></li>
			<ul>
				<li><p>This creates an ordered list where each element is numbered from 1 onwards.</p></li>
			</ul>
			<li><strong>Unordered lists</strong></li>
			<ul>
				<li>This creates an unordered list where the elemnst are displayed using <strong>bullet points</strong> instead of numbers.</li>
			</ul>
		</ol>
 	</div>
 	<h3>HTML Tables</h3>
 	<p>In order to give you an overview of what <strong>Tables</strong> are in HTML, I created a table about my 3 favourite pokemons below</p>
    <table border="1">
    	<th>Image</th>
    	<th>Name</th>
    	<th>Type</th>
    	<th>Evolves into</th>
    	<tr>
    		<td><img src="https://vignette.wikia.nocookie.net/pokemon/images/0/03/001.png/revision/latest?cb=20131102213407"></td>
    		<td>Bulbasaur</td>
    		<td>Grass/Poison</td>
    		<td><a href="https://pokemon.fandom.com/wiki/Ivysaur">Ivysaur</a></td>
    	</tr>
    	<tr>
    		<td><img src="https://vignette.wikia.nocookie.net/pokemon/images/d/d5/004.png/revision/latest?cb=20131102213739"></td>
    		<td>Charmander</td>
    		<td>Fire</td>
    		<td><a href="https://pokemon.fandom.com/wiki/Charmeleon">Charmeleon</a></td>
    	</tr>
    	<tr>
    		<td><img src="https://vignette.wikia.nocookie.net/pokemon/images/e/e8/007.png/revision/latest?cb=20131102220349"></td>
    		<td>Squirtle</td>
    		<td>Water</td>
    		<td><a href="https://pokemon.fandom.com/wiki/Wartortle">Wartortle</a></td>
    	</tr>
    </table>
    <p> You can find the html markup down below.</p>
    <p>
    	&lttable&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&ltth&gt<strong>Image</strong>&lt/th&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&ltth&gt<strong>Name</strong>&lt/th&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&ltth&gt<strong>Type</strong>&lt/th&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&ltth&gt<strong>Evolves into</strong>&lt/th&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&lttr&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Bulbasaur</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Grass/Poison</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Ivysaur</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&lt/tr&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&lttr&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Charmander</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Fire</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Charmeleon</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&lt/tr&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&lttr&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Squirtle</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Water</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lttd&gt<strong>Wartortle</strong>&lt/td&gt<br>
    	&nbsp&nbsp&nbsp&nbsp&lt/tr&gt<br>
    	&lt/table&gt
    </p>
    <p>
		<h3>Forms in HTML</h3>
		Forms are a regular occureance on the internet. For example, signing up to gmail etc... In order to create forms, we use the <strong>&ltform&gt</strong> tag. In other words, the HTML &ltform&gt element represents a document section that contains interactive controls for submitting information to a web server.
    </p>
    <p>
		<h1>Login page</h1>
		<form>
		<label for="first_name">First Name: </label>
		<input id="first_name" type="text" placeholder="John" required>
		<label for="last_name">Last Name: </label>
		<input id="last_name" type="text" placeholder="Smith" required><br>
		<label>Male</label>
		<input type="radio" name="Gender" value="male">
		<label>Female</label>
		<input type="radio" name="Gender" value="female">
		<label>Others</label>
		<input type="radio" name="Gender" value="others"><br>
		<label>Email:</label>
		<input type="Email" placeholder="your email" required>
		<label>Password: </label>
		<input type="password" pattern=".{5,10}" required title="5 to 10 characters"><br>
		<label>Birthday: </label>
		<select>
			<option>Month</option>
			<option>January</option>
			<option>February</option>
			<option>March</option>
		</select>
		<select>
			<option>Day</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
		</select>
		<select>
			<option>Year</option>
			<option>1999</option>
			<option>1998</option>
			<option>1997</option>
		</select><br>
		<label>I agree to the terms and conditions </label>
		<input type="checkbox"><br>
		<button>Submit</button>
		</form>
		</p>
		<p><strong>*** The actual login page was supposed to be display above but GitHub markup interpreter does not include the &ltform&gt tag in its list.</strong></p>
		<h3>CSS (Cascading style sheets</h3>
		<p><strong>Cascading Style Sheets (CSS)</strong> is a stylesheet language used to describe the presentation of a document written in HTML or XML</p>
		<h4>CSS Colors</h4>
		<p>You have 3 ways to including colors through CSS on your html page but first, lets talk about the basic syntax of CSS</p>
		<p align="center"><strong>
			selector {<br>
			property: value;<br>
			property: value;<br>
		}
		</strong></p>
		<p>You also have different ways to specifying the colors used in CSS. The 3  most common ways are shown below: </p>
		<ul>
			<li><strong>Inbuilt color names</strong></li>
			<li><strong>Use of hexadecimal values</strong></li>
			<li><strong>Use of RGB</strong></li>
		</ul>
		<h3>CSS Selectors</h3>
		<p>CSS selectors define the elements to which a set of CSS rules apply.</p>
		<span>Here is a list of selectors</span>
		<ol>
			<li><em>Universal Selector</em></li>
				<ul>
					<li><p>Selects all elements. <strong>Syntax: </strong> *</p></li>
				</ul>
			<li><em>Class Selector</em></li>
				<ul>
					<li>
						<p>Selects all elements that have the given class attribute. <strong>Syntax: </strong>.classname</p>
					</li>
				</ul>
			<li><em>ID Selector</em></li>
				<ul>
					<li><p>Selects an element based on its value of its <em>id</em> attribute. <strong>Syntax: </strong> #idname</p></li>
				</ul>
			<li><em>Attribute Selector</em></li>
				<ul>
					<li>
						<p>Selects all elements that have the given attribute. <strong>Syntax: </strong>[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]</p>
					</li>
				</ul>
			<li><em>Type Selector</em></li>
				<ul>
					<li><p>Selects all elements that have the given node name. <strong>Syntax: </strong>elementname</p></li>
				</ul>
		</ol>
		<h3>Font styles - CSS</h3>
		<p>The font CSS property is a shorthand for font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family. Alternatively, it sets an element's font to a system font.</p>
		<ul>
			<li><em>font-size</em></li>
			<ul>
				<li>The font-size CSS property sets the size of the font. This property is also used to compute the size of em, ex, and other relative &ltlength&gt units.</li>
			</ul>
			<li><em>font-family</em></li>
			<ul>
				<li>The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.</li>
			</ul>
			<li><em>line-height</em></li>
			<ul>
				<li>The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text.</li>
			</ul>
			<li><em>font-weight</em></li>
			<ul>
				<li>The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.</li>
			</ul>
			<li><em>text-decoration</em></li>
			<ul>
				<li>The text-decoration attribute defines whether text is decorated with an underline, overline and/or strike-through. </li>
			</ul>
			<li><em>text-align</em></li>
			<ul>
				<li>The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.
</li>
			</ul>
		</ul>
</body>

</html>