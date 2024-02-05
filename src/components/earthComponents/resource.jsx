import * as Three from "three";

const filePath = "/images/three/"
const fileSuffix = [
  'gradient',
  'redCircle',
  "label",
  "aperture",
  'glow',
  'light_column',
]

const textures = fileSuffix.map(item => {
  return {
    name: item,
    url: filePath + item + '.png'
  }
})
textures.push({
  name: 'earth',
  url: filePath + 'earth.jpg'
})

export default class Resource {
  constructor(callback) {
    this.callback = callback
    this.textures = {}

    this.setLoadingManager()
    this.loadResources()
  }
  setLoadingManager() {

    this.manager = new Three.LoadingManager()
    // Start
    this.manager.onStart = () => {
      console.log('Start Downloading Documents...')
    }
    // Finish Loading
    this.manager.onLoad = () => {
      this.callback()
    }
    // Downloading
    this.manager.onProgress = (url) => {
      console.log(`Downloading From：${url}`)
    }

    this.manager.onError = url => {
      console.log('Download Fail：' + url)
    }

  }

  /**
   * Download Resources
   */
  loadResources() {
    this.textureLoader = new Three.TextureLoader(this.manager)
    textures.forEach((item) => {
      this.textureLoader.load(item.url, (t) => {
        this.textures[item.name] = t
      })
    })
  }
}