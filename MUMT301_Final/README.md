# My Project: Timbre Visualizaiton

My MUMT 301 final project completes a Spotify API call to retrieve music metadata about a song the user inputs in a form, and then the data about timbre is put into an array and stacked to create a streamgraph. The graph visualizes the loudness, brightness, flatness, and strength of attack of any song. 

## Spotify API Call

[final_graph.html](https://github.com/mumt301/schaudruc/blob/master/MUMT301_Final/final_graph.html) begins with a form where the user submits a query: a song and its artist. 

- [spotify.js](https://github.com/mumt301/schaudruc/blob/master/MUMT301_Final/spotify.js) is included as a lightweight wrapper for the Spotify Web API. It contains helper functions for all Spotify endpoints to fetch metadata.

- A Spotify 'search' API call is made to look for the song in their library and identify its unique track ID. 

- The ID is used to retrieve a horde of music metadata in JSON format about that song via the 'audio analysis' endpoint. 

- The data is parsed to identify the segments section of the data which possesses a timbre category. 

  - Segments are described as short burts of a song where the sound is roughly consistent. 
  - Timbre can be defined as the character, quality, color, texture, or tone of a musical sound or voice. 

- Within the timbre data, there are 12 numbers and the first four represent:

  ​	1) the average loudness of the segment

  ​	2) the brightness

  ​	3) the flatness of a sound

  ​	4) sounds with a stronger attack

- These figures of each segment are stored in respective lists then compiled into one array that is ready to be turned into a graph... 

## Streamgraph

The final result of my project is a streamgraph that visualizes four attributes of timbre for a user's chosen song. A streamgraph is a stacked area graph around a central axis. This is done by loading in d3.js to help produce the graph. The title of each dataset is identified under the keys variable and after setting the dimensions and margins of the graph, the SVG (Scalable Vector Graphics) object is appended to the body of the page. SVG defines vector-based graphics for the web and after the x and y axes are created, the colors for each area of the graph are defined. Finally, the data must be stacked which means the y-coordinates represent cumulative y-values rather than literal data points, and SVG reveals the colorful and comparative areas of data. 

## CSS

The [audio_analyzer.css](https://github.com/mumt301/schaudruc/blob/master/MUMT301_Final/audio_analyzer.css) file defines the CSS for the website. One font has been imported and the rest is pretty fundamental. 

## Usage

This project can be used to make other Spotify API Calls or build off the code to complete a user-authenticated call which allows user-specific data to be accessed. The code to create a streamgraph can be manipulated with different datasets and dimensions/margins. On the user side, this project can help people begin thinking about music metadata and its insights. 

## Dependencies

- [spotify.js](https://github.com/mumt301/schaudruc/blob/master/MUMT301_Final/spotify.js)
- [D3](https://d3js.org/d3.v4.js)
- [jQuery](https://code.jquery.com/jquery-2.2.4.min.js)

## Supported Browsers

Tested (and approved) in Chrome & Safari. 

- Chrome version 87.0.4280.88 
- Safari version 13.1.1 

## License

- [CSS: Havard Brynjulfsen](https://codepen.io/havardob/pen/PoPaWaE)
- [Spotify Web API JS: JMPerez](https://jmperezperez.com/spotify-web-api-js/)
- [jQuery: jQuery Foundation](https://code.jquery.com/jquery-2.2.4.min.js)
- [D3: Mike Bostock](https://d3js.org/d3.v4.js)
