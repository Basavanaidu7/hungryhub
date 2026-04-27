await addDoc(collection(db, "food"), {
    userId: auth.currentUser.uid,
    name: item.name,
    price: item.price
});