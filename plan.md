# Rencana Pembuatan CSS untuk Modal Pop-up

Berikut adalah langkah-langkah yang akan diambil untuk membuat CSS untuk modal pop-up:

1.  **Buat file CSS baru**: Buat file baru dengan nama `modal.css` di dalam direktori `styles`.
2.  **Tambahkan CSS ke `modal.css`**: Tambahkan kode CSS berikut ke dalam file `styles/modal.css`:

    ```css
    /* SUBMIT MODAL START */
    /* SUBMIT MODAL START */

    .modal-overlay-submit {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
    }

    .modal-submit {
      background: white;
      padding: 30px;
      border-radius: 10px;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      text-align: center;
    }

    .modal-submit h2 {
      margin-top: 0;
      color: #d32f2f; /* Merah untuk peringatan */
    }

    .modal-submit p {
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .modal-buttons-submit {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }

    .modal-buttons-submit button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    .modal-buttons-submit button:first-child {
      background-color: #f0f0f0;
      color: #333;
    }

    .modal-buttons-submit button:first-child:hover {
      background-color: #e0e0e0;
    }

    .modal-buttons-submit button:last-child {
      background-color: #4CAF50; /* Hijau untuk melanjutkan */
      color: white;
    }

    .modal-buttons-submit button:last-child:hover {
      background-color: #45a049;
    }

    .modal-buttons-submit button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    /* SUBMIT MODAL END */
    /* SUBMIT MODAL END */
    ```

3.  **Impor `modal.css`**: Impor file `styles/modal.css` ke dalam file `pages/_app.js` dengan menambahkan baris berikut di bagian atas file:

    ```javascript
    import "../styles/modal.css";
    ```
