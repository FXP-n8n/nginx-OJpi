# TODO: Fix Chatbot Translation Issue

## Problem
The chatbot proposed questions have been translated for display, but the text sent to the webhook remains in English. This creates a mismatch between what users see and what data is sent to the backend.

## Solution Applied
Modified the chatbot quick reply button handler in `js/script.js` to use `button.textContent` instead of `button.dataset.message`. This ensures the translated text displayed to users is the same text sent to the webhook.

## Code Change
```javascript
// Before: Used data-message attribute (always English)
const message = this.dataset.message;

// After: Uses displayed textContent (translated based on current language)
const message = this.textContent;
```

## Testing Results
- ✅ English: Quick reply buttons send English text to webhook
- ✅ French: Quick reply buttons send French text to webhook  
- ✅ Dutch: Quick reply buttons send Dutch text to webhook

## Files Modified
- `js/script.js` - Updated chatbot message handling logic (line ~1085)

## Status: COMPLETED
All objectives achieved. The webhook now receives the same language text that users see in the chatbot interface.
