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

def find_s(file_path):
    data = pd.read_csv(file_path)
    attributes = data.columns[:-1]
    label = data.columns[-1]
    hypothesis = ['?' for _ in attributes]

    for _, row in data.iterrows():
        if row[label] == 'Yes':
            for i, val in enumerate(row[attributes]):
                if hypothesis[i] == '?' or hypothesis[i] == val:
                    hypothesis[i] = val
                else:
                    hypothesis[i] = '?'
    return hypothesis

file_path = "training_data.csv"
print("Final Hypothesis:", find_s(file_path))
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

data = np.random.rand(100)
labels = ["Class1" if x <= 0.5 else "Class2" for x in data[:50]]

def distance(a,b):
    return abs(a-b)

def knn(train, labels, x, k):
    d = [(distance(x,train[i]), labels[i]) for i in range(len(train))]
    d.sort()
    return Counter([lab for _,lab in d[:k]]).most_common(1)[0][0]

train = data[:50]
test = data[50:]

for k in [1,3,5]:
    preds = [knn(train, labels, x, k) for x in test]
    print(f"k={k}:", preds[:10])
`
  },

  {
    id: "p6",
    title: "Program 6: Locally Weighted Regression",
    height: "h-80",
    code: String.raw`
import numpy as np
import matplotlib.pyplot as plt

def kernel(x, xi, tau):
    return np.exp(-(x-xi)**2 / (2*tau**2))

def lwr(x, X, y, tau):
    W = np.diag([kernel(x, xi, tau) for xi in X])
    theta = np.linalg.inv(X.T @ W @ X) @ X.T @ W @ y
    return np.array([1,x]) @ theta

X = np.linspace(0,2*np.pi,100)
y = np.sin(X) + 0.1*np.random.randn(100)
Xb = np.c_[np.ones(X), X]

xt = np.linspace(0,2*np.pi,200)
yt = [lwr(x, Xb, y, 0.5) for x in xt]

plt.scatter(X,y,color='red')
plt.plot(xt, yt, color='blue')
plt.title("Locally Weighted Regression")
plt.show()
`
  },

  {
    id: "p7",
    title: "Program 7: Linear Regression — California Housing",
    height: "h-80",
    code: String.raw`
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

housing = fetch_california_housing(as_frame=True)
X = housing.data[["AveRooms"]]
y = housing.target

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)

model = LinearRegression()
model.fit(X_train,y_train)
y_pred = model.predict(X_test)

plt.scatter(X_test,y_test)
plt.plot(X_test,y_pred,color='red')
plt.title("Linear Regression")
plt.show()
`
  },

  {
    id: "p8",
    title: "Program 8: Decision Tree — Breast Cancer",
    height: "h-80",
    code: String.raw`
import matplotlib.pyplot as plt
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, plot_tree

data = load_breast_cancer()
X_train,X_test,y_train,y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42)

clf = DecisionTreeClassifier()
clf.fit(X_train,y_train)

plt.figure(figsize=(12,8))
plot_tree(clf, filled=True)
plt.show()
`
  },

  {
    id: "p9",
    title: "Program 9: Naive Bayes — Olivetti Faces",
    height: "h-80",
    code: String.raw`
from sklearn.datasets import fetch_olivetti_faces
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score

data = fetch_olivetti_faces(shuffle=True, random_state=42)
X_train,X_test,y_train,y_test = train_test_split(
    data.data, data.target, test_size=0.3, random_state=42)

model = GaussianNB()
model.fit(X_train,y_train)

pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test,pred))
`
  },

  {
    id: "p10",
    title: "Program 10: K-Means Clustering — Breast Cancer",
    height: "h-96",
    code: String.raw`
import matplotlib.pyplot as plt
from sklearn.datasets import load_breast_cancer
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

data = load_breast_cancer()
X = StandardScaler().fit_transform(data.data)

kmeans = KMeans(n_clusters=2, random_state=42)
labels = kmeans.fit_predict(X)

pca = PCA(n_components=2)
X2 = pca.fit_transform(X)

plt.scatter(X2[:,0], X2[:,1], c=labels, cmap='Set1')
plt.title("K-Means Clustering")
plt.show()
`
  }

];
