import Visualizer from './classes/visualizer'

export default class Template extends Visualizer {
  constructor () {
    super({ volumeSmoothing: 100 })
  }

  hooks () {
    this.sync.on('tatum', tatum => {
        // do something on every tatum
    })

    this.sync.on('segment', segment => {
        if (index % 2 === 0) {
            // do something ov every second 
        }
    })

    this.sync.on('beat', beat => {
        // do something on every beat, using the beat's duration in milliseconds
    })

    this.sync.on('bar', bar => {

    })

    this.sync.on('section', section => {

    })
  }

  paint ({ ctx, height, width, now }) {
    console.log(this.sync.volume);
    // this.sync.tatum
    // this.sync.segment
    // this.sync.beat
    // this.sync.bar
    // this.sync.section
  }
}