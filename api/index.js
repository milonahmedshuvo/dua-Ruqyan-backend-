const express = require('express');
const cors = require('cors');
const db = require('../db');


const app = express();
app.use(cors());
app.use(express.json());

// Get all categories
app.get('/categories', (req, res) => {
    db.all('SELECT * FROM category', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get categories by specific category ID
app.get('/categories/:categoryId', (req, res) => {
    const {categoryId } = req.params;
    db.all('SELECT * FROM category WHERE id = ?', [categoryId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get subcategories by category ID
app.get('/subcategories/:categoryId', (req, res) => {
    const { categoryId } = req.params;
    db.all('SELECT * FROM sub_category WHERE cat_id = ?', [categoryId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


// Get all dua
app.get('/dua/:subcatId', (req, res) => {
    const {subcatId} = req.params
    db.all('SELECT * FROM dua WHERE subcat_id = ?', [subcatId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


// Get duas by subcategory ID
app.get('/duas/:subcategoryId', (req, res) => {
    const { subcategoryId } = req.params;
    db.all('SELECT * FROM duas WHERE subcategory_id = ?', [subcategoryId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
app.get('/',(req, res) =>{
   res.send("Dua Server is running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
