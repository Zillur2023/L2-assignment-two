import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true
  },
  value: {
    type: Schema.Types.Mixed,
    required: true
  }, 
},
{ _id: false }
);

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  },
},
{ _id: false }
);

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    // unique: true,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product tags are required'],
  },
  variants: {
    type: [variantSchema],
    required: [true, 'Product variants are required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Product inventory is required'],
  },
},
{ versionKey: false }
);

export const Product = model<TProduct>('Product', productSchema);
