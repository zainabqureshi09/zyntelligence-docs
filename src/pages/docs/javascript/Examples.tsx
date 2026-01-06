import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptExamples() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Examples</h1>

        <p className="doc-paragraph">
          These practical examples demonstrate real-world applications of JavaScript concepts.
          Try modifying them to reinforce your learning.
        </p>

        <h2 className="doc-subheading">Example 1: Form Validation</h2>

        <CodeBlock
          language="javascript"
          title="formValidation.js"
          code={`function validateForm(formData) {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!formData.email) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        errors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
        errors.password = "Password must contain uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
        errors.password = "Password must contain a number";
    }

    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

// Usage
const form = {
    email: "john@example.com",
    password: "SecurePass123",
    name: "John Doe"
};

const result = validateForm(form);
console.log(result.isValid ? "Form is valid!" : result.errors);`}
        />

        <h2 className="doc-subheading">Example 2: Shopping Cart</h2>

        <CodeBlock
          language="javascript"
          title="shoppingCart.js"
          code={`class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        const existing = this.items.find(item => item.id === product.id);
        
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity
            });
        }
        
        console.log(\`Added \${quantity}x \${product.name} to cart\`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (quantity <= 0) this.removeItem(productId);
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    displayCart() {
        console.log("\\n=== Shopping Cart ===");
        this.items.forEach(item => {
            console.log(\`\${item.name} x\${item.quantity} - $\${(item.price * item.quantity).toFixed(2)}\`);
        });
        console.log(\`---\\nTotal: $\${this.getTotal().toFixed(2)}\`);
        console.log(\`Items: \${this.getItemCount()}\`);
    }
}

// Usage
const cart = new ShoppingCart();

cart.addItem({ id: 1, name: "Laptop", price: 999.99 });
cart.addItem({ id: 2, name: "Mouse", price: 29.99 }, 2);
cart.addItem({ id: 3, name: "Keyboard", price: 79.99 });

cart.displayCart();`}
        />

        <h2 className="doc-subheading">Example 3: Async Data Fetching</h2>

        <CodeBlock
          language="javascript"
          title="dataFetching.js"
          code={`// Async function to fetch and display users
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
        return [];
    }
}

// Fetch with retry logic
async function fetchWithRetry(url, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(\`Attempt \${attempt}...\`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }
            
            return await response.json();
        } catch (error) {
            if (attempt === maxRetries) {
                throw new Error(\`Failed after \${maxRetries} attempts: \${error.message}\`);
            }
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}

// Parallel fetching
async function fetchMultipleResources() {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/users/1',
        'https://jsonplaceholder.typicode.com/comments?postId=1'
    ];

    try {
        const results = await Promise.all(
            urls.map(url => fetch(url).then(r => r.json()))
        );
        
        const [post, user, comments] = results;
        console.log({ post, user, commentsCount: comments.length });
    } catch (error) {
        console.error("One or more requests failed:", error);
    }
}

// Run examples
fetchUsers().then(users => {
    console.log(\`Fetched \${users.length} users\`);
});`}
        />

        <h2 className="doc-subheading">Example 4: Debounce and Throttle</h2>

        <CodeBlock
          language="javascript"
          title="utilities.js"
          code={`// Debounce: Execute after delay, reset on each call
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage: Search input
const searchInput = debounce((query) => {
    console.log(\`Searching for: \${query}\`);
    // API call would go here
}, 300);

// Simulating user typing
searchInput("h");
searchInput("he");
searchInput("hel");
searchInput("hello"); // Only this triggers after 300ms

// Throttle: Execute at most once per interval
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: Scroll handler
const handleScroll = throttle(() => {
    console.log(\`Scroll position: \${window.scrollY}\`);
}, 100);

// Would be used like:
// window.addEventListener('scroll', handleScroll);`}
        />

        <h2 className="doc-subheading">Example 5: Local Storage Manager</h2>

        <CodeBlock
          language="javascript"
          title="storageManager.js"
          code={`const StorageManager = {
    // Set item with optional expiry
    set(key, value, expiryMinutes = null) {
        const item = {
            value,
            timestamp: Date.now(),
            expiry: expiryMinutes ? expiryMinutes * 60 * 1000 : null
        };
        
        try {
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch (error) {
            console.error("Storage error:", error);
            return false;
        }
    },

    // Get item (returns null if expired)
    get(key) {
        try {
            const item = JSON.parse(localStorage.getItem(key));
            
            if (!item) return null;
            
            // Check expiry
            if (item.expiry && Date.now() - item.timestamp > item.expiry) {
                this.remove(key);
                return null;
            }
            
            return item.value;
        } catch (error) {
            return null;
        }
    },

    // Remove item
    remove(key) {
        localStorage.removeItem(key);
    },

    // Clear all items
    clear() {
        localStorage.clear();
    },

    // Get all keys
    keys() {
        return Object.keys(localStorage);
    },

    // Check remaining storage
    getStorageSize() {
        let total = 0;
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length;
            }
        }
        return \`\${(total / 1024).toFixed(2)} KB\`;
    }
};

// Usage
StorageManager.set("user", { name: "John", age: 30 });
StorageManager.set("token", "abc123", 60); // Expires in 60 minutes

console.log(StorageManager.get("user")); // { name: "John", age: 30 }
console.log(StorageManager.getStorageSize());`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Keep Practicing</h3>
          <p className="text-muted-foreground mb-4">
            The best way to master JavaScript is by building projects.
            Try extending these examples or creating your own variations.
          </p>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/javascript/functions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Functions
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
