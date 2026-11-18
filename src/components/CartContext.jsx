"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);          // [{ id, name, price, image, qty, size, color }]
  const [isOpen, setIsOpen] = useState(false);      // drawer open/close
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("aloreen_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      // ignore
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem("aloreen_cart", JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items, isMounted]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const addItem = (product, { size, color, qty = 1 } = {}) => {
    setItems((prev) => {
      const key = `${product.id}-${size || ""}-${color || ""}`;
      const existing = prev.find(
        (i) => `${i.id}-${i.size || ""}-${i.color || ""}` === key
      );
      if (existing) {
        return prev.map((i) =>
          `${i.id}-${i.size || ""}-${i.color || ""}` === key
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          size: size || null,
          color: color || null,
          qty,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (id, size, color) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.id === id && i.size === size && i.color === color)
      )
    );
  };

  const updateQty = (id, size, color, qty) => {
    if (qty <= 0) {
      removeItem(id, size, color);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size && i.color === color
          ? { ...i, qty }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totals = useMemo(() => {
    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const freeThreshold = 2000;
    const remainingForFree = Math.max(0, freeThreshold - subtotal);
    const freeProgress = Math.min(100, (subtotal / freeThreshold) * 100);
    return { totalItems, subtotal, remainingForFree, freeProgress, freeThreshold };
  }, [items]);

  const value = {
    items,
    isOpen,
    ...totals,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}