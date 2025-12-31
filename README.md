# TP 7: React Native - API, AsyncStorage & SQLite

Application de gestion de tâches (To-Do List) développée avec React Native / Expo.

## Fonctionnalités

### 1. Connexion API (Online)
- Récupération des tâches depuis `https://jsonplaceholder.typicode.com/todos`
- Affichage avec loader et gestion des erreurs.
- **Screen**: `TodoListFetchScreen`

### 2. Thème Persistant (AsyncStorage)
- Gestion du mode Sombre / Clair (Dark/Light).
- Persistance du choix utilisateur avec `AsyncStorage`.
- **Context**: `ThemeContext`

### 3. Mode Hors Ligne (SQLite) - *Prioritaire*
- Stockage des tâches en local sur le téléphone avec `expo-sqlite`.
- Fonctionnalités CRUD :
  - **Ajouter** une tâche.
  - **Lire** les tâches stockées.
  - **Mettre à jour** une tâche.
  - **Supprimer** une tâche (🗑️).
- **Screen**: `TodoListOfflineScreen`

## Installation et Lancement

1.  **Installation des dépendances**
    ```bash
    npm install
    # ou
    npm install axios
    npx expo install @react-native-async-storage/async-storage expo-sqlite
    ```

2.  **Lancement**
    ```bash
    npx expo start
    ```
    Scannez le QR code avec l'application **Expo Go** sur votre téléphone Android ou iOS.

## Auteur
[Votre Nom / elbaroudidouae]
