# 🚀 NewsSelect — AI-Powered News Summarization App

An end-to-end, AI-powered web application for real-time, abstractive news summarization using a Seq2Seq LSTM model with Attention — integrated with Django backend, web scraping for live news, and a responsive frontend UI.

---

## 📌 1️⃣ Problem Statement

In the digital age, readers face information overload from countless news sources. Manually scanning lengthy articles is inefficient and impractical.

**✅ Solution:** Build an intelligent system that can automatically fetch live news articles, summarize them using an AI model, and display them to users through a clean web interface.

---

## 📌 2️⃣ Technology Stack & Rationale

| Technology                     | Purpose                                          | Why?                                                          |
| ------------------------------ | ------------------------------------------------ | ------------------------------------------------------------- |
| **Python 3.x**                 | Core language for ML and backend development     | High ecosystem support for ML, data, and web frameworks.      |
| **TensorFlow 2.x / Keras**     | Deep learning framework for model implementation | Native support for Seq2Seq + Attention, easy TPU integration. |
| **Pandas / NumPy**             | Data manipulation and numerical computation      | Efficient, reliable, and industry standard.                   |
| **Matplotlib**                 | Visualizing training metrics                     | Quick and effective for loss/accuracy plots.                  |
| **Contractions**               | Text normalization library                       | Handles text cleaning and standardization.                    |
| **Django**                     | Backend web framework                            | Secure, scalable, Python-native framework with ORM.           |
| **BeautifulSoup / Requests**   | Web scraping of live news articles               | Light, flexible scraping for dynamic news updates.            |
| **HTML/CSS/JS (Bootstrap)**    | Frontend for UI rendering                        | Rapidly build responsive, clean user interfaces.              |
| **TPU Runtime (Colab/Kaggle)** | Accelerated training of deep learning models     | Dramatically reduces training time for large NLP models.      |

---

## 📌 3️⃣ High-Level Design (HLD)

```
+-----------------+         +----------------+        +-------------------+
|    Preprocess    |  --->   |    Encoder      |  --->  |   Attention Layer  |
|   Clean + Token  |         |   (Bi-LSTM)     |        | (Context Vector)   |
+-----------------+         +----------------+        +-------------------+
                                                            |
                                                            V
                                                   +----------------+
                                                   |    Decoder      |
                                                   |   (LSTM + FC)   |
                                                   +----------------+
                                                            |
                                                            V
                                                   +----------------+
                                                   |    Summary       |
                                                   +----------------+
                                                            |
                                                            V
                                                   +----------------+
                                                   |  Django Backend  |
                                                   | (Model Serving & |
                                                   |   Web Scraping)  |
                                                   +----------------+
                                                            |
                                                            V
                                                   +----------------+
                                                   |   Frontend UI    |
                                                   | (Responsive App) |
                                                   +----------------+
```

**Workflow:**

1. Load and preprocess dataset — 42,000 articles from Kaggle (`news_summary.csv`)
2. Clean, normalize and tokenize text (handled contractions, removed punctuations).
3. Train a Seq2Seq Encoder-Decoder model:
   - Encoder: Bi-directional LSTM
   - Attention Layer for context alignment
   - Decoder: LSTM + Dense for sequence prediction
4. Achieved:
   - **Final Training Accuracy:** 89.62%
   - **Final Validation Accuracy:** 74.08%
   - **Final Training Loss:** 0.7421
   - **Final Validation Loss:** 2.0726
   - **AUC Score:** 0.79
   - **F1 Score:** 0.73
5. Model trained on Kaggle TPUs in 180 minutes over 100 epochs.
6. Deployed via Django backend providing summarization API.
7. Integrated web scraping module fetching latest news articles.
8. Served through a Bootstrap-based responsive frontend UI.

---

## 📌 4️⃣ Features

- ✅ Automatic real-time summarization of live news.
- ✅ Deep learning-based abstractive summarization.
- ✅ Custom preprocessing: lowercasing, contractions fixing, cleaning.
- ✅ Django-based REST APIs for ML model access.
- ✅ Live web scraping for dynamic news input.
- ✅ Responsive, clean UI to view articles and summaries.
- ✅ TPU-accelerated model training.
- ✅ Final Training Accuracy: 89.62%, Validation Accuracy: 74.08%

---

## 📌 5️⃣ Results & Metrics

- **Final Training Accuracy:** 89.62%
- **Final Validation Accuracy:** 74.08%
- **Final Training Loss:** 0.7421
- **Final Validation Loss:** 2.0726
- **AUC Score:** 0.79
- **F1 Score:** 0.73
- Trained in **180 minutes** on Kaggle TPU over **100 epochs**.
- Visualized through:
  - 📈 Accuracy vs Epoch
  - 📉 Loss vs Epoch
- Real-time summaries accessible via Django APIs and frontend interface.

---

## 📌 6️⃣ Local Setup

**Prerequisites:**

- Python 3.8+
- Django
- TensorFlow 2.x
- BeautifulSoup4
- Requests

**Steps:**

1. Clone repository
2. Install dependencies via `pip install -r requirements.txt`
3. Run Django backend: `python manage.py runserver`
4. Launch frontend via `index.html`
5. Access real-time summarizer and live news updates

---

## 📌 7️⃣ Project Structure

```
├── major-project-model-final.ipynb    # ML model development & training
├── backend/                           # Django backend serving model & scraping
├── frontend/                          # Web frontend for users
└── README.md                          # Project documentation
```

---

## 📌 8️⃣ Future Improvements

- 📝 Support multilingual summarization.
- 📊 Integrate cloud-based model deployment (AWS/GCP).
- 📲 Build mobile-friendly PWA interface.
- 📈 Use real-time analytics on summary usage trends.
- 🗞️ Extend to additional content categories (sports, finance, health).

---