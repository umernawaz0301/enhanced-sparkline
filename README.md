# Enhanced Sparkline

A lightweight and highly customizable JavaScript/React library for creating small, elegant graphs with additional features like X-axis labels, Y-axis range customization, scatter dots, and support for missing or null values. Perfect for dashboards, data visualization, and trend monitoring.

---

## Features

- **X-axis labels**: Display dynamic labels for better readability.
- **Customizable Y-axis ranges**: Define minimum and maximum Y-axis values to scale the graph.
- **Handles null/missing values**: Automatically skips null or undefined values in your dataset.
- **Scatter dots**: Adds scatter points to highlight data points on the trendline.
- **Responsive rendering**: Optimized for high-resolution displays using the HTML Canvas API.
- **Compact and lightweight**: Designed for minimal memory usage and smooth rendering.

---

## Installation

Install the package via npm:

```bash
npm install enhanced-sparkline
```

---

## Usage

### For JavaScript/React

Here's an example of how to use the library in a React application:

#### **1. Import the Library**

```tsx
import React from "react";
import { Graph } from "enhanced-sparkline";
```

#### **2. Use the Component**

```tsx
const App = () => {
  const data = [10, 15, null, 25, 30]; // Example dataset with a null value
  const labels = ["M", "T", "W", "T", "F"]; // X-axis labels

  return (
    <div>
      <Graph
        data={data}
        labels={labels}
        yMin={10}
        yMax={40}
        width={200}
        height={100}
      />
    </div>
  );
};

export default App;
```

---

### For Pure JavaScript

If you're using the library without React:

#### **1. Import the Library**

```html
<script src="path/to/enhanced-sparkline.js"></script>
```

#### **2. Render the Graph**

```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const data = [10, 15, null, 25, 30];
const labels = ["M", "T", "W", "T", "F"];

drawGraph(data, ctx, 0, 0, 200, 100, labels, 10, 40); // Pass your dataset, labels, and Y-axis range
```

---

## Props (For React)

| Prop     | Type       | Default  | Description                                 |
| -------- | ---------- | -------- | ------------------------------------------- | -------------------------------------------------- |
| `data`   | `(number   | null)[]` | `[]`                                        | The dataset to visualize. Null values are skipped. |
| `labels` | `string[]` | `[]`     | X-axis labels corresponding to the dataset. |
| `yMin`   | `number`   | `0`      | Minimum value for the Y-axis.               |
| `yMax`   | `number`   | `100`    | Maximum value for the Y-axis.               |
| `width`  | `number`   | `150`    | Width of the canvas in pixels.              |
| `height` | `number`   | `80`     | Height of the canvas in pixels.             |

---

## Functions (For JavaScript)

### `drawGraph(data, ctx, xStart, yStart, width, height, labels, yMin, yMax)`

Draws a graph directly on the canvas using the provided data.

#### Parameters:

- `data`: An array of numbers or `null` values (e.g., `[10, 15, null, 25]`).
- `ctx`: The canvas rendering context (`CanvasRenderingContext2D`).
- `xStart`: X-coordinate for starting the graph.
- `yStart`: Y-coordinate for starting the graph.
- `width`: Width of the graph.
- `height`: Height of the graph.
- `labels`: Array of strings for the X-axis labels.
- `yMin`: Minimum Y-axis value.
- `yMax`: Maximum Y-axis value.

---

## Example Data

```javascript
const data = [10, 15, null, 20, 30];
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
```

---

## Development

To contribute or modify the library:

1. Clone the repository:

   ```bash
   git clone https://github.com/umernawaz0301/enhanced-sparkline.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the build:
   ```bash
   npm run build
   ```

---

## License

MIT License © 2024 Umer Nawaz

---

## Feedback & Support

For bugs or feature requests, please open an issue on [GitHub](https://github.com/umernawaz0301/enhanced-sparkline).
