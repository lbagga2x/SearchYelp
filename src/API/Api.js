import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      "Bearer IDIrjtuuFRglLCzWUgEDZbwPJIyKsrzKF4Aq1ZymZz4dXZBhK0rOVZYjswkG2BhLY-3dklD9kv31n4eBlKsGXEgitXnS-driM88ju-HmcBSTdlwXf2bYlFMyR4iSXnYx",
  },
});

// Client ID
// 9X1G0wmMKp1Mr1xvF4xivA

// API Key
// IDIrjtuuFRglLCzWUgEDZbwPJIyKsrzKF4Aq1ZymZz4dXZBhK0rOVZYjswkG2BhLY-3dklD9kv31n4eBlKsGXEgitXnS-driM88ju-HmcBSTdlwXf2bYlFMyR4iSXnYx
