const rootPersistConfig = {
    key: 'root',
    storage,
  }
  
  const userPersistConfig = {
    key: 'user',
    storage: storageSession,
  }
  
  const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    notes: notesReducer
  })
  
  const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
  
  const store = configureStore({
    reducer: persistedReducer
  })