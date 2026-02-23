// app/components/programs.tsx

export const programs = [

  {
    id: "p1",
    title: "Program 1: California Housing — Histograms, Boxplots & Outliers",
    height: "h-96",
    code: String.raw`
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_california_housing

data = fetch_california_housing(as_frame=True)
housing_df = data.frame

numerical_features = housing_df.select_dtypes(include=[np.number]).columns

plt.figure(figsize=(15, 10))
for i, feature in enumerate(numerical_features):
    plt.subplot(3, 3, i + 1)
    sns.histplot(housing_df[feature], kde=True, bins=30, color='blue')
    plt.title(f'Distribution of {feature}')
plt.tight_layout()
plt.show()

plt.figure(figsize=(15, 10))
for i, feature in enumerate(numerical_features):
    plt.subplot(3, 3, i + 1)
    sns.boxplot(x=housing_df[feature], color='orange')
    plt.title(f'Box Plot of {feature}')
plt.tight_layout()
plt.show()

print("Outliers Detection:")
for feature in numerical_features:
    Q1 = housing_df[feature].quantile(0.25)
    Q3 = housing_df[feature].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    outliers = housing_df[(housing_df[feature] < lower) | (housing_df[feature] > upper)]
    print(f"{feature}: {len(outliers)} outliers")

print("\\nDataset Summary:")
print(housing_df.describe())
`
  },

  {
    id: "p2",
    title: "Program 2: Correlation Heatmap & Pair Plot",
    height: "h-80",
    code: String.raw`
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_california_housing

data = fetch_california_housing(as_frame=True).frame

corr = data.corr()

plt.figure(figsize=(10,8))
sns.heatmap(corr, annot=True, cmap='coolwarm', fmt='.2f', linewidths=0.5)
plt.title("Correlation Matrix")
plt.show()

sns.pairplot(data, diag_kind='kde', plot_kws={'alpha':0.5})
plt.suptitle("Pair Plot", y=1.02)
plt.show()
`
  },

  {
    id: "p3",
    title: "Program 3: PCA on Iris Dataset",
    height: "h-72",
    code: String.raw`
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

iris = load_iris()
X = iris.data
y = iris.target

pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

plt.figure(figsize=(8,6))
colors = ['r','g','b']

for i in range(3):
    plt.scatter(X_reduced[y==i,0], X_reduced[y==i,1],
                label=iris.target_names[i], color=colors[i])

plt.title("PCA on Iris Dataset")
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.legend()
plt.grid()
plt.show()
`
  },

  {
    id: "p4",
    title: "Program 4: Find-S Algorithm",
    height: "h-64",
    code: String.raw`
    import pandas as pd
# Function to implement the Find-S Algorithm
def find_s_algorithm(file_path):
    # Read the dataset
    
    data = pd.read_csv(file_path)
    print("Training data:")
    print(data)
    # Separate attributes and class label
    attributes = data.columns[:-1] # All columns except the last one
    class_label = data.columns[-1] # Last column is the class label
    # Initialize hypothesis with '?' for each attribute
    hypothesis = ['?' for _ in attributes]
    # Iterate through the dataset to find the specific hypothesis
    for index, row in data.iterrows():
    # Only consider positive examples (class label == 'Yes')
        if row[class_label] == 'Yes':
            for i, value in enumerate(row[attributes]):
    # If hypothesis is '?' or matches the current value, update hypothesis
                if hypothesis[i] == '?' or hypothesis[i] == value:
                    hypothesis[i] = value
                else:
                # If the value is different, set '?' for that attribute
                    hypothesis[i] = '?'
    return hypothesis
    # Define file path

    # Call the Find-S algorithm
file_path = "training_data.csv"
hypothesis = find_s_algorithm(file_path)
# Print the final hypothesis
print("\nThe final hypothesis is:", hypothesis)




Sky,AirTemp,Humidity,Wind,Water,Forecast,EnjoySport
Sunny,Warm,Normal,Strong,Warm,Same,Yes
Sunny,Warm,High,Strong,Warm,Same,Yes
Rainy,Cold,High,Strong,Warm,Change,No
Sunny,Warm,High,Strong,Cool,Change,Yes
`
  },

  {
    id: "p5",
    title: "Program 5: k-Nearest Neighbors (Manual)",
    height: "h-96",
    code: String.raw`
    import numpy as np
import matplotlib.pyplot as plt
from collections import Counter

# Generate random data
data = np.random.rand(100)

# Label first 50 points
labels = ["Class1" if x <= 0.5 else "Class2" for x in data[:50]]

# Function to compute Euclidean distance
def euclidean_distance(x1, x2):
    return abs(x1 - x2)

# k-NN classifier function
def knn_classifier(train_data, train_labels, test_point, k):
    distances = [
        (euclidean_distance(test_point, train_data[i]), train_labels[i])
        for i in range(len(train_data))
    ]

    distances.sort(key=lambda x: x[0])  # Sort by distance
    k_nearest_neighbors = distances[:k]  # Get k nearest neighbors
    k_nearest_labels = [label for _, label in k_nearest_neighbors]

    return Counter(k_nearest_labels).most_common(1)[0][0]

# Prepare the training and test data
train_data = data[:50]
train_labels = labels
test_data = data[50:]

# Values of k to test
k_values = [1, 2, 3, 4, 5, 20, 30]

print("--- k-Nearest Neighbors Classification ---")
print("Training dataset: First 50 points labeled based on rule (x <= 0.5 -> Class1)")
print("Testing dataset: Remaining 50 points to be classified\n")

results = {}

# Loop over different values of k
for k in k_values:
    print(f"Results for k = {k}:")

    classified_labels = [
        knn_classifier(train_data, train_labels, test_point, k)
        for test_point in test_data
    ]

    results[k] = classified_labels

    for i, label in enumerate(classified_labels, start=51):
        print(f"Point x{i} (value: {test_data[i - 51]:.4f}) -> {label}")

    print("\n")

print("Classification complete.\n")

# Visualization
for k in k_values:
    classified_labels = results[k]

    class1_points = [
        test_data[i] for i in range(len(test_data))
        if classified_labels[i] == "Class1"
    ]

    class2_points = [
        test_data[i] for i in range(len(test_data))
        if classified_labels[i] == "Class2"
    ]

    plt.figure(figsize=(8, 5))

    plt.scatter(
        train_data,
        [0] * len(train_data),
        c=["blue" if label == "Class1" else "red" for label in train_labels],
        label="Training Data",
        marker="o"
    )

    plt.scatter(class1_points, [1] * len(class1_points),
                c="blue", label="Class1 (Test)", marker="x")

    plt.scatter(class2_points, [1] * len(class2_points),
                c="red", label="Class2 (Test)", marker="x")

    plt.title(f"k-NN Classification Results (k = {k})")
    plt.xlabel("Data Points")
    plt.ylabel("Level")
    plt.legend()
    plt.grid(True)
    plt.show()
`
  },

  {
    id: "p6",
    title: "Program 6: Locally Weighted Regression",
    height: "h-80",
    code: String.raw`
    import numpy as np
import matplotlib.pyplot as plt

# Gaussian Kernel Function
def gaussian_kernel(x, xi, tau):
    return np.exp(-np.sum((x - xi) ** 2) / (2 * tau ** 2))

# Locally Weighted Regression Function
def locally_weighted_regression(x, X, y, tau):
    m = X.shape[0]

    weights = np.array([
        gaussian_kernel(x, X[i], tau) for i in range(m)
    ])

    W = np.diag(weights)

    X_transpose_W = X.T @ W

    theta = np.linalg.inv(X_transpose_W @ X) @ X_transpose_W @ y

    return x @ theta


# Generate sample data
np.random.seed(42)

X = np.linspace(0, 2 * np.pi, 100)
y = np.sin(X) + 0.1 * np.random.randn(100)

# Add bias term
X_bias = np.c_[np.ones(X.shape), X]

# Test points
x_test = np.linspace(0, 2 * np.pi, 200)
x_test_bias = np.c_[np.ones(x_test.shape), x_test]

tau = 0.5

# Predict values
y_pred = np.array([
    locally_weighted_regression(xi, X_bias, y, tau)
    for xi in x_test_bias
])

# Plot
plt.figure(figsize=(10, 6))
plt.scatter(X, y, color='red', label='Training Data', alpha=0.7)
plt.plot(x_test, y_pred, color='blue', label=f'LWR Fit (tau={tau})', linewidth=2)

plt.xlabel('X')
plt.ylabel('y')
plt.title('Locally Weighted Regression')
plt.legend()
plt.grid(True)
plt.show()
`
  },

  {
    id: "p7",
    title: "Program 7: Linear Regression — California Housing",
    height: "h-80",
    code: String.raw`
    import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.metrics import mean_squared_error, r2_score


# ---------------------------------------
# Linear Regression - California Housing
# ---------------------------------------
def linear_regression_california():
    housing = fetch_california_housing(as_frame=True)

    X = housing.data[["AveRooms"]]   # Single feature
    y = housing.target               # Target

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    model = LinearRegression()
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)

    # Plot
    plt.figure(figsize=(8, 5))
    plt.scatter(X_test, y_test, color="blue", label="Actual")
    plt.scatter(X_test, y_pred, color="red", label="Predicted")
    plt.xlabel("Average number of rooms (AveRooms)")
    plt.ylabel("Median value of homes")
    plt.title("Linear Regression - California Housing")
    plt.legend()
    plt.show()

    # Metrics
    print("Linear Regression - California Housing")
    print("Mean Squared Error:", mean_squared_error(y_test, y_pred))
    print("R^2 Score:", r2_score(y_test, y_pred))
    print("\n")


# ---------------------------------------
# Polynomial Regression - Auto MPG
# ---------------------------------------
def polynomial_regression_auto_mpg():

    url = "https://archive.ics.uci.edu/ml/machine-learning-databases/auto-mpg/auto-mpg.data"

    column_names = [
        "mpg", "cylinders", "displacement", "horsepower",
        "weight", "acceleration", "model_year", "origin"
    ]

    data = pd.read_csv(url, sep="\s+", names=column_names, na_values="?")
    data = data.dropna()

    X = data["displacement"].values.reshape(-1, 1)
    y = data["mpg"].values

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    poly_model = make_pipeline(
        PolynomialFeatures(degree=2),
        StandardScaler(),
        LinearRegression()
    )

    poly_model.fit(X_train, y_train)

    y_pred = poly_model.predict(X_test)

    # Plot
    plt.figure(figsize=(8, 5))
    plt.scatter(X_test, y_test, color="blue", label="Actual")
    plt.scatter(X_test, y_pred, color="red", label="Predicted")
    plt.xlabel("Displacement")
    plt.ylabel("Miles per gallon (mpg)")
    plt.title("Polynomial Regression - Auto MPG")
    plt.legend()
    plt.show()

    # Metrics
    print("Polynomial Regression - Auto MPG")
    print("Mean Squared Error:", mean_squared_error(y_test, y_pred))
    print("R^2 Score:", r2_score(y_test, y_pred))
    print("\n")


# ---------------------------------------
# Main Function
# ---------------------------------------
if __name__ == "__main__":
    print("Demonstrating Linear Regression and Polynomial Regression\n")

    linear_regression_california()
    polynomial_regression_auto_mpg()
`
  },

  {
    id: "p8",
    title: "Program 8: Decision Tree — Breast Cancer",
    height: "h-80",
    code: String.raw`
    import numpy as np
import matplotlib.pyplot as plt

from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn import tree

# Load dataset
data = load_breast_cancer()

X = data.data
y = data.target

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train Decision Tree model
clf = DecisionTreeClassifier(random_state=42)
clf.fit(X_train, y_train)

# Predict test data
y_pred = clf.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Predict new sample
new_sample = np.array([X_test[0]])
prediction = clf.predict(new_sample)

prediction_class = "Benign" if prediction[0] == 1 else "Malignant"

print(f"Predicted Class for the new sample: {prediction_class}")

# Plot Decision Tree
plt.figure(figsize=(12, 8))
tree.plot_tree(
    clf,
    filled=True,
    feature_names=data.feature_names,
    class_names=data.target_names
)

plt.title("Decision Tree - Breast Cancer Dataset")
plt.show()
`
  },

  {
    id: "p9",
    title: "Program 9: Naive Bayes — Olivetti Faces",
    height: "h-80",
    code: String.raw`
    import numpy as np
import matplotlib.pyplot as plt

from sklearn.datasets import fetch_olivetti_faces
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Load dataset (requires internet first time)
data = fetch_olivetti_faces(shuffle=True, random_state=42)

X = data.data
y = data.target

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Train Gaussian Naive Bayes
gnb = GaussianNB()
gnb.fit(X_train, y_train)

# Predict
y_pred = gnb.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy * 100:.2f}%')

print("\nClassification Report:")
print(classification_report(y_test, y_pred, zero_division=1))

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Cross-validation
cross_val_accuracy = cross_val_score(gnb, X, y, cv=5, scoring='accuracy')
print(f'\nCross-validation accuracy: {cross_val_accuracy.mean() * 100:.2f}%')

# Display some predictions
fig, axes = plt.subplots(3, 5, figsize=(12, 8))

for ax, image, label, prediction in zip(
    axes.ravel(), X_test[:15], y_test[:15], y_pred[:15]
):
    ax.imshow(image.reshape(64, 64), cmap=plt.cm.gray)
    ax.set_title(f"True: {label}\nPred: {prediction}")
    ax.axis('off')

plt.tight_layout()
plt.show()
`
  },

  {
    id: "p10",
    title: "Program 10: K-Means Clustering — Breast Cancer",
    height: "h-96",
    code: String.raw`
    import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_breast_cancer
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import confusion_matrix, classification_report
data = load_breast_cancer()
X = data.data
y = data.target
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
kmeans = KMeans(n_clusters=2, random_state=42)
y_kmeans = kmeans.fit_predict(X_scaled)
print("Confusion Matrix:")
print(confusion_matrix(y, y_kmeans))
print("\nClassification Report:")
print(classification_report(y, y_kmeans))
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
df = pd.DataFrame(X_pca, columns=['PC1', 'PC2'])
df['Cluster'] = y_kmeans
df['True Label'] = y
plt.figure(figsize=(8, 6))
sns.scatterplot(data=df, x='PC1', y='PC2', hue='Cluster', palette='Set1', s=100,
edgecolor='black', alpha=0.7)
plt.title('K-Means Clustering of Breast Cancer Dataset')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.legend(title="Cluster")
plt.show()
plt.figure(figsize=(8, 6))
sns.scatterplot(data=df, x='PC1', y='PC2', hue='True Label', palette='coolwarm',
s=100, edgecolor='black', alpha=0.7)
plt.title('True Labels of Breast Cancer Dataset')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.legend(title="True Label")
plt.show()
plt.figure(figsize=(8, 6))
sns.scatterplot(data=df, x='PC1', y='PC2', hue='Cluster', palette='Set1', s=100,
edgecolor='black', alpha=0.7)
centers = pca.transform(kmeans.cluster_centers_)
plt.scatter(centers[:, 0], centers[:, 1], s=200, c='red', marker='X', label='Centroids')
plt.title('K-Means Clustering with Centroids')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.legend(title="Cluster")
plt.show()
`
  }

];
