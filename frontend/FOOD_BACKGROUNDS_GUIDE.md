# Food Images Setup Guide

## 📁 Directory Structure

```
frontend/
├── public/
│   └── images/
│       ├── backgrounds/
│       │   ├── food-1.jpg
│       │   ├── food-2.jpg
│       │   └── food-ingredients.jpg
│       └── patterns/
│           ├── vegetable-pattern.svg
│           └── food-texture.svg
└── src/
    └── food-background.css
```

## 🎨 How to Use Food Backgrounds

### 1. **Hero Background with Food Images**
```jsx
<section className="content hero-background" 
         style={{backgroundImage: 'url(/images/backgrounds/food-ingredients.jpg)'}}>
```

### 2. **Apply Glass Morphism Cards**
```jsx
<div className="glass-card">
  {/* Your content here */}
</div>
```

### 3. **Use Layered Food Background**
```jsx
<div className="layered-food-bg">
  {/* Your content */}
</div>
```

## 🖼️ Free Food Background Image Sources

### Recommended Free Resources:
1. **Unsplash** - https://unsplash.com/s/photos/food-ingredients
2. **Pexels** - https://www.pexels.com/search/food/
3. **Pixabay** - https://pixabay.com/images/search/fresh%20vegetables/
4. **Freepik** - https://www.freepik.com/ (with attribution)

### Recommended Images:
- Fresh vegetables on dark background
- Farmers market produce
- Herbs and spices
- Fresh ingredients
- Organic food styling

## 📝 CSS Classes Available

| Class | Purpose |
|-------|---------|
| `.hero-background` | Full-screen hero with gradient overlay |
| `.glass-card` | Glass-morphism card effect |
| `.food-pattern-bg` | Food pattern overlay |
| `.organic-shapes-bg` | Organic geometric shapes background |
| `.layered-food-bg` | Layered texture background |
| `.supply-card-bg` | Card background for supplier/query items |
| `.food-gradient-text` | Green gradient text effect |

## 🔧 Adding Custom Background Images

### Method 1: Direct Image Reference
```css
.custom-food-bg {
    background-image: url('/images/backgrounds/food-1.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}
```

### Method 2: Inline Style (React)
```jsx
<div style={{
    backgroundImage: 'url(/images/backgrounds/food-ingredients.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}}>
```

### Method 3: With Overlay Gradient
```css
.food-with-overlay {
    background-image: 
        linear-gradient(135deg, rgba(245, 248, 246, 0.9) 0%, rgba(229, 246, 239, 0.8) 100%),
        url('/images/backgrounds/food-1.jpg');
    background-size: cover;
}
```

## 🎯 Best Practices

1. **Optimize Images**
   - Use compressed images (max 500KB)
   - Use WebP format for better quality/size
   - Use responsive images for different screen sizes

2. **Performance**
   - Use `background-attachment: fixed` carefully (can impact performance)
   - Consider using CSS gradients + subtle patterns instead of large images
   - Lazy load background images when possible

3. **Accessibility**
   - Ensure text has sufficient contrast over background
   - Add overlay gradients to darken/lighten backgrounds
   - Test with screen readers

4. **Color Harmony**
   - Primary green: `#087f5b`
   - Light green: `#e5f6ef`
   - Use these in overlays for consistency

## 🚀 Quick Implementation

### Add a food background to any page:
```jsx
import '../food-background.css';

export default function YourPage() {
    return (
        <section className="content hero-background">
            {/* Your content */}
        </section>
    );
}
```

### Combine multiple effects:
```jsx
<div className="content hero-background food-pattern-bg floating-bg">
    <div className="glass-card">
        {/* Content with glass effect */}
    </div>
</div>
```

## 📱 Responsive Considerations

Add media queries for mobile optimization:
```css
@media (max-width: 768px) {
    .content {
        background-attachment: scroll; /* Better performance on mobile */
    }
}
```

---

**Note:** All CSS classes are already defined in `food-background.css`. Simply add the class names to your components!
