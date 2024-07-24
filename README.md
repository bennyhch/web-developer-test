# Demo Video

How I approach it

1. Remove the ending comma in json
2. Fetch the data on the frontend using the custom hook `useGalleryData`
3. Manage all the states in the higher level component (i.e., `Home`) with the useState hook
4. Create two components (i.e., `ImageCardContainer` and `ImageCard`) and render all the images in the UI
5. Implement the reversing logic by declaring the handler (i.e., `sortingHandler`)
6. Fix the css styling

![demo.gif](demo.gif)

# Web Developer Task

Hi there! Today's task is to replicate a simple gallery page in a starter Next.js app.

You can refer to the design.png file in this repository or use a figma design you can find [here](https://www.figma.com/design/cqwIYXNHitVg2nAlMBfObA/Web-Developer-Test?node-id=0-1&t=nQJuZMDmryzLddLl-1)

Please make meaningful commits at multiple points in your process, however please **DO NOT PUSH** commits to `origin` until the end of the day (to avoid other candidates gaining access to your work)

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

![design.png](design.png)

# Steps

1. Please fork this repository, choosing to 'contribute to the parent project' if prompted, and pull the code to your machine
2. To install and run the app either
   1. `npm install` and then `npm run dev`
   2. `yarn install` and then `yarn dev`
3. Edit the ./app/page.tsx file - you can add other files for new react components if you'd like - making a page as close as possible to the design shown. The page should display the images and have a button that reverses the sorting
4. Use the hook useGalleryData (`./lib/useGalleryData') to load the image data - but BEWARE, the JSON data used by the hook has a problem, please fix that!
5. **IMPORTANT** - please make meaningful commits at multiple points in your process, however please **DO NOT PUSH** commits to `origin` until the end of the day (to avoid other candidates gaining access to your work)
