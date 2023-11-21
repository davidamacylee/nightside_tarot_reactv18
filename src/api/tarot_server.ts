export const tarot_server_calls = {
    getRandomCard: async () => {
        const response = await fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1')

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    
    getThreeCards: async() => {
        const response = await fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=3')

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
}