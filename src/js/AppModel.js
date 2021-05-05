export class AppModel {
  
  async getData() {
    const response = await fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
    const data = await response.json()
    return data
  }
} 