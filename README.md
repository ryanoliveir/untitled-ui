# Ignitetailwind


[text](https://ignitetailwind.vercel.app)



# CSS Pseudo-elements: `::before` and `::after`

A way to add visual/decorative elements via CSS, without polluting HTML with extra `<span>` or `<div>` tags just for styling.

## Summary

- `::before` = adds content **before** the element's content
- `::after` = adds content **after** the element's content
- Both are "ghost" elements created by CSS
- Super useful for decorations, icons, overlays, etc.

Especially helpful when you want to keep HTML semantic and clean, leaving all visual aspects to CSS.

## Examples

### With Tailwind CSS

**Custom bullets:**
```html
<li class="before:content-['✓'] before:text-green-500 before:mr-2">
  Completed item
</li>
```

**Decorative bar:**
```html
<h2 class="before:content-[''] before:block before:w-12 before:h-1 before:bg-blue-500 before:mb-2">
  Title with top bar
</h2>
```

**Quotation marks:**
```html
<blockquote class="before:content-['"'] after:content-['"'] italic">
  This is a quote
</blockquote>
```

**Overlay/layer:**
```html
<div class="relative before:absolute before:inset-0 before:bg-black/50 before:z-10">
  <img src="photo.jpg" />
  <p class="relative z-20">Text over darkened image</p>
</div>
```

### With Regular CSS
```css
.element::before {
  content: "→ ";
  color: blue;
}

.element::after {
  content: " ←";
  color: red;
}
```

## Key Points

- Always requires the `content` property (even if empty: `content-['']`)
- Can be styled like any other element (colors, sizes, positioning, etc.)
- Don't appear in the DOM, but are visible and rendered
- Cannot be used on self-closing tags like `<img>` or `<input>`