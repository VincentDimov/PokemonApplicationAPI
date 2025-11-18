# Pokemon Application

Your task is to create an interface where users can retrieve information about different Pokémon.  
API Endpoint: [https://pokeapi.co/api/v2/pokemon?limit=151](https://pokeapi.co/api/v2/pokemon?limit=151)

## Components

- `<App>`
- `<PokemonApplication>`
- `<Pokemon>`

## Instructions

1. When the application starts, the user should see a button with the text **“Start Pokemon App”**.  

2. When the button is clicked, the `<PokemonApplication>` component should be rendered in the DOM.  

3. When `<PokemonApplication>` is rendered, it should make a request to the API to fetch data for all 151 Pokémon and store it in state.  

4. Inside `<PokemonApplication>`, create a dropdown list containing the names of all fetched Pokémon.  
   The user should be able to select a Pokémon from the dropdown list and then click a button to fetch data for the selected Pokémon.  

5. When the user fetches data for a Pokémon, render a `<Pokemon>` component.  

6. The `<Pokemon>` component should display the following data for the selected Pokémon:

   - Name  
   - Image  
   - Type(s) (i.e., the “types” field from the API)  
   - Weight  
   - Height
