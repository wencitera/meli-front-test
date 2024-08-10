const expresss = require('express');
const cors = require('cors');
const adapter = require('../functions/adapter')
const services = require('../services/public.services')

const router = expresss.Router();

router.get('/api/items', cors() ,async (req, res) => {
    try {
      const items = await services.getItemsSearch(req.query.q, req.query.limit);

      const uniqueCategories = [...new Set(items.map(item => item.category_id))];
      const categoryPromises = uniqueCategories.map(async (category) => {
        var categoryResponse = await services.getCategoryById(category);
        return categoryResponse.name;
      });

      const categoriesNames = await Promise.all(categoryPromises);

      res.json(adapter.adaptItems(items, categoriesNames));

    } catch (error) {
      res.status(500).json({ error: error });
    }
});


router.get('/api/items/:id', cors(), async (req, res) => {
    try {
        const itemId = req.params.id;

        const itemData = await services.getItemData(itemId);
        const description = await services.getItemDescription(itemId);
        const category = await services.getCategoryById(itemData.category_id);

        const formattedItem = adapter.adaptItemDetail(itemData, description, category);

        res.json(formattedItem);
    } catch (error) {

        res.status(500).json({ error: 'Ocurrió un error al obtener el ítem' });
    }
});


module.exports = router;