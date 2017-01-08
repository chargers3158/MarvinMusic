# Marvin Music Application

The Marvin Music Application is an online radio platform with a gamified concept implemented within. Similar to old school jukeboxes, Marvin is a purcahse to play system. Marvinites will be given 'currency' on a per diem basis which can be used to 'purchase' songs. Songs are sorted based on length of track, the longer the song, the more expensive the purhcase price. Also, if a song has been previously played within a defined time frame, the price will be increased. All these price adjustments should prevent stagnation of the song base and reward adding new content. 

Once songs have been purhcased, they will be placed in a 'first in, first out' queue. However, two actions can change this behavior: 'Hyperspeed' and 'Destroy'. Hyperspeed will push the selected track to the front of the queue and will be played next. Destroy will remove the song out of the queue. Both will have limited uses on a given day.

### Installing and building Marvin

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v4 or newer installed on your
machine.

**Step 2**. Make sure that you have [Webpack](https://webpack.github.io/docs/) installed on your machine:

```shell
$ npm install -g webpack webpack-dev-server
```

**Step 3**. Clone this repository and install dev dependencies:

```shell
$ git clone https://github.com/topheryoung/marvin_music_app.git marvinMusicApp
$ cd marvinMusicApp
$ npm install
```

**Step 4**. (Optional) Compile the app by running:

```shell
$ npm run compile
```

**Step 5**. Compile and start live-reload server at [http://localhost:8888/](http://localhost:8888/):

```shell
$ npm run serve
```



### How to Deploy/Build Production

Run the the following command. Code will minify js/css and build into the '/dist' folder:

```shell
$ npm run build
```

