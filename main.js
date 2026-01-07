<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ANN'S VENTURES — Admin</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="pink-bg">

  <div class="admin-container container">
    <div class="admin-card">
      <img src="assets/logo.png" alt="logo" class="logo-small center" />
      <h2>Admin Login</h2>

      <form id="login-form" class="form">
        <label>Username
          <input id="username" type="text" required placeholder="admin" />
        </label>
        <label>Password
          <input id="password" type="password" required placeholder="••••••" />
        </label>
        <button type="submit" class="btn">Sign in</button>
      </form>

      <div id="admin-area" class="hidden">
        <h3>Product Manager</h3>

        <form id="product-form" class="form">
          <label>Title <input id="p-title" required /></label>
          <label>Category
            <select id="p-category">
              <option value="wear">Wear</option>
              <option value="drink">Drink</option>
            </select>
          </label>
          <label>Price (NGN) <input id="p-price" type="number" min="0" step="0.01" required /></label>
          <label>Image <input id="p-image" type="file" accept="image/*" /></label>

          <div id="preview-area" class="preview-area hidden">
            <p><strong>Preview</strong></p>
            <img id="preview-img" alt="preview" />
          </div>

          <div class="form-row">
            <button id="save-product" class="btn">Save Product</button>
            <button id="clear-form" type="button" class="btn ghost">Clear</button>
          </div>
        </form>

        <h4>Existing Products</h4>
        <div id="product-list" class="product-list"></div>

        <div class="form-row">
          <button id="logout" class="btn ghost">Logout</button>
          <button id="export-data" class="btn ghost">Export JSON</button>
        </div>
      </div>

      <p class="small muted">Admin demo: default username <strong>admin</strong>. Set password on first login.</p>
    </div>
  </div>

  <script src="admin.js"></script>
</body>
</html>
