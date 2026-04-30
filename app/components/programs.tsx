// app/components/programs.tsx

export const programs = [

  {
    id: "p1",
    title: "Program 1: Word Embeddings (GloVe) — Vector Arithmetic",
    height: "h-96",
    code: String.raw`
import gensim.downloader as api      

# Load pre-trained word vectors (GloVe)
print("Loading pre-trained GloVe vectors... This may take a few seconds.")
model = api.load("glove-wiki-gigaword-100")  
#model1 = api.load("word2vec-google-news-300")               #
print("Model loaded successfully!
")

# Experiment 1: king - man + woman
result1 = model.most_similar(
    positive=['king', 'woman'],
    negative=['man'],
    topn=1
)

# Experiment 2: paris - france + italy
result2 = model.most_similar(
    positive=['paris', 'italy'],
    negative=['france'],
    topn=1
)

# Experiment 3: father - man + woman
result3 = model.most_similar(
    positive=['father', 'woman'],
    negative=['man'],
    topn=1
)

# Experiment 4: brother - man + woman
result4 = model.most_similar(
    positive=['brother', 'woman'],
    negative=['man'],
    topn=3
)

# Experiment 5: walking - walk + swim
result5 = model.most_similar(
    positive=['walking', 'swim'],
    negative=['walk'],
    topn=1
)

# Experiment 6: uncle - man + woman - aunt +man
result6 = model.most_similar(
    positive=['uncle', 'woman','man'],
    negative=['man','aunt'],
    topn=5
)

# Printing results
print("Experiment Results:
")
print("king - man + woman =", result1)
print("paris - france + italy =", result2)
print("father - man + woman =", result3)
print("brother - man + woman =", result4)
print("walking - walk + swim =", result5)
print("uncle - man + woman =", result6)
`
  },

  {
    id: "p2",
    title: "Program 2: PCA + Word2Vec Visualization",
    height: "h-80",
    code: String.raw`
    # Module or library install command (run this in terminal before running the script)
# pip install gensim matplotlib scikit-learn

import gensim.downloader as api
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# Load model
model = api.load("word2vec-google-news-300")

# Select 10 domain-specific words (technology domain)
words = ['computer', 'internet', 'software', 'hardware', 'keyboard', 'mouse', 'server', 'network', 'programming', 'database']
vectors = [model[word] for word in words]

# Dimensionality reduction using PCA
pca = PCA(n_components=2)
reduced = pca.fit_transform(vectors)

# Generate 5 semantically similar words for a given input
input_word = 'computer'
similar_words = model.most_similar(input_word, topn=5)

# Print the similar words to terminal
print(f"Top 5 words similar to '{input_word}':")
for word, score in similar_words:
    print(f"{word}: {score:.4f}")

# Plot the word embeddings
plt.figure(figsize=(8, 6))
for i, word in enumerate(words):
    plt.scatter(reduced[i, 0], reduced[i, 1])
    plt.annotate(word, (reduced[i, 0], reduced[i, 1]))
plt.title("PCA Visualization of Technology Word Embeddings")
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.grid(True)

# Show the plot
plt.show()
`
  },

  {
    id: "p3",
    title: "Program 3: Word2Vec + t-SNE (Medical)",
    height: "h-80",
    code: String.raw`
    # Module or library install command (run this in terminal before running the script)
# pip install gensim matplotlib scikit-learn

import matplotlib.pyplot as plt
from sklearn.manifold import TSNE
import numpy as np
from gensim.models import Word2Vec

# Sample domain-specific corpus (medical domain)
medical_corpus = [
    "The patient was diagnosed with diabetes and hypertension.",
    "MRI scans reveal abnormalities in the brain tissue.",
    "The treatment involves antibiotics and regular monitoring.",
    "Symptoms include fever, fatigue, and muscle pain.",
    "The vaccine is effective against several viral infections.",
    "Doctors recommend physical therapy for recovery.",
    "The clinical trial results were published in the journal.",
    "The surgeon performed a minimally invasive procedure.",
    "The prescription includes pain relievers and anti-inflammatory drugs.",
    "The diagnosis confirmed a rare genetic disorder."
]

# Preprocess corpus (tokenize sentences and convert to lowercase)
processed_corpus = [sentence.lower().split() for sentence in medical_corpus]

# Train a Word2Vec model
model = Word2Vec(sentences=processed_corpus, vector_size=100, window=5, min_count=1, workers=4, epochs=50)

# Extract embeddings for visualization
words = list(model.wv.index_to_key)  # List of words in the vocabulary
embeddings = np.array([model.wv[word] for word in words])  # Word embeddings for each word

# Dimensionality reduction using t-SNE
tsne = TSNE(n_components=2, random_state=42, perplexity=5)
tsne_result = tsne.fit_transform(embeddings)

# Visualization of word embeddings
plt.figure(figsize=(10, 8))
plt.scatter(tsne_result[:, 0], tsne_result[:, 1], color="blue")

# Annotating each point with the corresponding word
for i, word in enumerate(words):
    plt.text(tsne_result[i, 0] + 0.02, tsne_result[i, 1] + 0.02, word, fontsize=12)

plt.title("Word Embeddings Visualization (Medical Domain)")
plt.xlabel("Dimension 1")
plt.ylabel("Dimension 2")
plt.grid(True)

plt.show()

# Analyze domain-specific semantics
def find_similar_words(input_word, top_n=5):
    try:
        similar_words = model.wv.most_similar(input_word, topn=top_n)
        print(f"Words similar to '{input_word}':")
        for word, similarity in similar_words:
            print(f"  {word} ({similarity:.2f})")
    except KeyError:
        print(f"'{input_word}' not found in vocabulary.")

# Generate semantically similar words
find_similar_words("treatment")
find_similar_words("vaccine")
`
  },

  {
    id: "p4",
    title: "Program 4: Word2Vec Prompt Enrichment",
    height: "h-72",
    code: String.raw`
from gensim.models import Word2Vec

# ── 1. Reuse the same Medical Corpus ─────────
corpus = [
    "The patient was diagnosed with diabetes and hypertension by doctor.",
    "MRI scans reveal abnormalities in the brain tissue said the doctor.",
    "The treatment by doctor involves antibiotics and regular monitoring.",
    "Symptoms include fever, fatigue, and muscle pain.",
    "The vaccine is effective against several viral infections.",
    "Doctor recommend physical therapy for recovery.",
    "The clinical trial results were published in the journal.",
    "The surgeon performed a minimally invasive procedure.",
    "The prescription by doctor includes pain relievers and anti-inflammatory drugs.",
    "The diagnosis confirmed a rare genetic disorder."
]

sentences = [sentence.lower().split() for sentence in corpus]

# ── 2. Train Word2Vec Model ─────────────────
model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, epochs=50)

# ── 3. Original Prompt ──────────────────────
original_prompt = "Write a short note about doctor and patient treatment."

# ── 4. Get Similar Words for Key Terms ──────
def get_similar(word):
    if word in model.wv:
        return [w for w, s in model.wv.most_similar(word, topn=3)]
    return []

doctor_similar = get_similar("doctor")
patient_similar = get_similar("patient")
treatment_similar = get_similar("treatment")

print("Similar to doctor:", doctor_similar)
print("Similar to patient:", patient_similar)
print("Similar to treatment:", treatment_similar)

# ── 5. Create Enriched Prompt ───────────────
enriched_prompt = f"""
Write a detailed medical explanation about doctor,
{', '.join(doctor_similar)},
patient,
{', '.join(patient_similar)},
and treatment including
{', '.join(treatment_similar)}.
"""

# ── 6. Simulated AI Response Generator ──────
def generate_response(prompt):
    return f"
Generated Response:
{prompt}"

original_output = generate_response(original_prompt)
enriched_output = generate_response(enriched_prompt)

# ── 7. Print Outputs ────────────────────────
print("
--- ORIGINAL PROMPT ---")
print(original_prompt)

print("
--- ENRICHED PROMPT ---")
print(enriched_prompt)

print("
--- ORIGINAL OUTPUT ---")
print(original_output)

print("
--- ENRICHED OUTPUT ---")
print(enriched_output)

# ── 8. Simple Comparison ────────────────────
print("
--- COMPARISON ---")
print("Original Prompt Length:", len(original_prompt))
print("Enriched Prompt Length:", len(enriched_prompt))
`
  },

  {
    id: "p5",
    title: "Program 5: Generate Paragraph from Word Embeddings",
    height: "h-80",
    code: String.raw`
# Required Libraries:
# Install gensim if not already installed:
# pip install gensim

import gensim.downloader as api  # For loading pre-trained word embeddings
from gensim.models import KeyedVectors  # For working with word vectors
import random  # For shuffling similar words

# Load pre-trained GloVe word vectors (100-dimensional, trained on Wikipedia + Gigaword)
model = api.load("glove-wiki-gigaword-100")

# Function to generate similar words for a given seed word
def generate_similar_words(seed_word, topn=10):
    # Check if the seed word exists in the model vocabulary
    if seed_word in model:
        # Return top 'n' similar words based on cosine similarity
        return [word for word, _ in model.most_similar(seed_word, topn=topn)]
    else:
        # Return empty list if word not in vocabulary
        return []

# Function to create a meaningful paragraph using the seed and its similar words
def create_paragraph(seed_word):
    similar_words = generate_similar_words(seed_word, topn=10)
    if not similar_words:
        return f"No similar words found for '{seed_word}'."

    # Randomly shuffle similar words and select 5
    random.shuffle(similar_words)
    selected_words = similar_words[:5]

    # Construct a short creative paragraph
    paragraph = f"In a world defined by {seed_word}, "
    paragraph += f"people found themselves surrounded by concepts like {', '.join(selected_words[:-1])}, and {selected_words[-1]}. "
    paragraph += f"These ideas shaped the way they thought, acted, and dreamed. Every step forward in their journey reflected the essence of '{seed_word}', "
    paragraph += f"bringing them closer to understanding the true meaning of {selected_words[0]}."

    return paragraph

# Example usage
seed = "freedom"  # You can change this to any word like 'love', 'innovation', etc.
print(create_paragraph(seed))
`
  },

  {
    id: "p6",
    title: "Program 6: Sentiment Analysis (Transformers)",
    height: "h-72",
    code: String.raw`
# Step 1: Install required libraries (only run once)
# pip install transformers torch

# Step 2: Import necessary library
from transformers import pipeline

# Step 3: Load the sentiment analysis pipeline using a pre-trained model
sentiment_pipeline = pipeline("sentiment-analysis")

# Step 4: Define input sentences (simulating real-world user reviews)
input_sentences = [
    "The new phone I bought is absolutely amazing!",
    "Worst customer service ever. I'm never coming back.",
    "The experience was average, nothing special.",
    "Fast delivery and the packaging was perfect.",
    "The product broke within two days. Very disappointed."
]

# Step 5: Perform sentiment analysis
results = sentiment_pipeline(input_sentences)

# Step 6: Display the results
print("Sentiment Analysis Results:
")
for sentence, result in zip(input_sentences, results):
    print(f"Input Sentence: {sentence}")
    print(f"Predicted Sentiment: {result['label']}, Confidence Score: {result['score']:.2f}
")

`
  },

  {
    id: "p7",
    title: "Program 7: Text Summarization",
    height: "h-72",
    code: String.raw`
# Required libraries (install before running this script):
# pip install transformers torch

from transformers import pipeline  # Import the summarization pipeline from Hugging Face Transformers

# Load a smaller and faster pre-trained model for summarization
# 't5-small' is lightweight and quick, ideal for small/medium passages
summarizer = pipeline("summarization", model="t5-small")

# Input text to be summarized
text = """
The Industrial Revolution, which took place from the 18th to the 19th centuries, was a period during which predominantly agrarian, rural societies in Europe and America became industrial and urban. Prior to the Industrial Revolution, manufacturing was often done in people's homes, using hand tools or basic machines. Industrialization marked a shift to powered, special-purpose machinery, factories and mass production. The iron and textile industries, along with the development of the steam engine, played central roles in the Industrial Revolution, which also saw improved systems of transportation, communication and banking. While industrialization brought about an increased volume and variety of manufactured goods and an improved standard of living for some, it also resulted in often grim employment and living conditions for the poor and working classes.
"""

# Generate the summary of the input text
summary = summarizer(text, max_length=60, min_length=30, do_sample=False)

# Print the summarized output
print(summary[0]['summary_text'])
`
  },

  {
    id: "p8",
    title: "Program 8: LLM Document Summary (Cohere)",
    height: "h-80",
    code: String.raw`
!pip install -qU langchain-cohere langchain-community langchain-core cohere

# ===============================================================
# 2. IMPORTS & AUTHENTICATION
# ===============================================================
import os
from google.colab import drive, userdata
from langchain_cohere import ChatCohere
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.document_loaders import TextLoader

# Setup API Key
try:
    # Try getting from Colab Secrets (🔑 icon on the left)
    os.environ["COHERE_API_KEY"] = userdata.get('COHERE_API_KEY')
    if not os.environ["COHERE_API_KEY"]:
        raise ValueError
except:
    # Manual fallback - using your verified key
    os.environ["COHERE_API_KEY"] = ""

# Mount Google Drive
drive.mount('/content/drive', force_remount=True)

# ===============================================================
# 3. LOAD THE DOCUMENT
# ===============================================================
file_path = "/content/drive/MyDrive/1.txt"

try:
    # Loading file '1' as plain text
    loader = TextLoader(file_path, encoding='utf-8')
    documents = loader.load()
    text_data = documents[0].page_content
    print(f"✅ File loaded successfully! ({len(text_data)} characters found)")
except Exception as e:
    print(f"❌ Error loading file: {e}")
    text_data = ""

# ===============================================================
# 4. RUN SUMMARIZATION (2026 Model Version)
# ===============================================================
if text_data:
    # Using 'command-light' as it is the current active 2026 endpoint
    # If this also 404s, 'command-nightly' is the final fallback for newer APIs
    try:
        llm = ChatCohere(model="command-light", temperature=0.3)

        prompt = ChatPromptTemplate.from_template("""
        You are an AI research assistant. Provide a structured summary of the text below.

        - **Main Topic**: One sentence overview.
        - **Key Details**: Bullet points of main facts.
        - **Conclusion**: A brief final takeaway.

        TEXT:
        {text}
        """)

        chain = prompt | llm | StrOutputParser()

        print("
🚀 GENERATING SUMMARY...
" + "="*40)
        summary = chain.invoke({"text": text_data})
        print(summary)

    except Exception as e:
        if "404" in str(e):
            print("⚠️ 'command-light' not found. Trying final 2026 fallback: 'command-nightly'...")
            llm_fallback = ChatCohere(model="command-nightly", temperature=0.3)
            chain_fallback = prompt | llm_fallback | StrOutputParser()
            print(chain_fallback.invoke({"text": text_data}))
        else:
            print(f"❌ Execution Error: {e}")
else:
    print("⚠️ No content to summarize. Check your file content in Google Drive.")

`
  },

  {
    id: "p9",
    title: "Program 9: Structured JSON Extraction (Cohere)",
    height: "h-80",
    code: String.raw`
from typing import List, Optional
from pydantic import BaseModel
import cohere
import json
import re


# -------------------------------
# 1. API KEY
# -------------------------------
co = cohere.Client("YOUR API")


# -------------------------------
# 2. Schema
# -------------------------------
class InstitutionInfo(BaseModel):
    name: str
    founder: Optional[str] = None
    founded_year: Optional[str] = None
    branches: Optional[List[str]] = None
    employees: Optional[str] = None
    summary: str


# -------------------------------
# 3. Prompt
# -------------------------------
def build_prompt(name: str):
    return f"""
You are a Wikipedia expert.

Extract information about: {name}

Return ONLY valid JSON:

{{
  "name": "",
  "founder": "",
  "founded_year": "",
  "branches": [],
  "employees": "",
  "summary": "4-line summary"
}}

Rules:
- If unknown, use null
- branches must be a list
- summary must be exactly 4 lines
- Return ONLY JSON, no extra text
"""


# -------------------------------
# 4. CALL COHERE (UPDATED)
# -------------------------------
def get_institution_info(name: str) -> InstitutionInfo:
    response = co.chat(
        model="command-a-03-2025",   
        message=build_prompt(name),
        temperature=0.3
    )

    text = response.text.strip()

    # Extract JSON safely
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if not match:
        raise ValueError("No JSON found in response:
" + text)

    data = json.loads(match.group())

    return InstitutionInfo(**data)


# -------------------------------
# 5. RUN
# -------------------------------
name = input("Enter Institution Name: ")
result = get_institution_info(name)

print("
--- RESULT ---
")
print(result)

print("
--- DETAILS ---")
print(result.model_dump())
`
  }

];