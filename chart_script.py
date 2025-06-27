import plotly.graph_objects as go
import json

# Data for the Lumina Chronicles feature breakdown
data = {
  "main_categories": [
    {
      "name": "3D Interactive",
      "percentage": 35,
      "color": "#6B46FF",
      "sub_features": [
        {"name": "Crystal System", "percentage": 40, "color": "#8B6BFF"},
        {"name": "Particle FX", "percentage": 30, "color": "#9B7EFF"},
        {"name": "3D Animations", "percentage": 30, "color": "#AB8EFF"}
      ]
    },
    {
      "name": "Content Mgmt", 
      "percentage": 25,
      "color": "#8FFFE0",
      "sub_features": [
        {"name": "6 Content Sec", "percentage": 50, "color": "#A8FFE6"},
        {"name": "Article System", "percentage": 30, "color": "#B8FFE8"},
        {"name": "Navigation", "percentage": 20, "color": "#C8FFEA"}
      ]
    },
    {
      "name": "User Experience",
      "percentage": 20, 
      "color": "#FFB347",
      "sub_features": [
        {"name": "Responsive", "percentage": 40, "color": "#FFC167"},
        {"name": "Loading Anim", "percentage": 30, "color": "#FFCF87"},
        {"name": "Accessibility", "percentage": 30, "color": "#FFDDA7"}
      ]
    },
    {
      "name": "Performance",
      "percentage": 20,
      "color": "#FF6B9D", 
      "sub_features": [
        {"name": "Optimization", "percentage": 50, "color": "#FF8BB3"},
        {"name": "Cross-browser", "percentage": 30, "color": "#FFABC9"},
        {"name": "Deployment", "percentage": 20, "color": "#FFCBDF"}
      ]
    }
  ]
}

# Prepare data for sunburst chart
labels = []
parents = []
values = []
colors = []

# Add main categories
for category in data["main_categories"]:
    labels.append(category["name"])
    parents.append("")
    values.append(category["percentage"])
    colors.append(category["color"])
    
    # Add sub-features
    for sub_feature in category["sub_features"]:
        labels.append(sub_feature["name"])
        parents.append(category["name"])
        # Calculate actual value (sub-feature percentage of main category percentage)
        actual_value = (sub_feature["percentage"] / 100) * category["percentage"]
        values.append(actual_value)
        colors.append(sub_feature["color"])

# Create sunburst chart
fig = go.Figure(go.Sunburst(
    labels=labels,
    parents=parents,
    values=values,
    branchvalues="total",
    marker=dict(colors=colors),
    hovertemplate='<b>%{label}</b><br>%{value:.1f}%<extra></extra>',
    maxdepth=2,
))

# Update layout
fig.update_layout(
    title="Lumina Chronicles Feature Breakdown",
    font_size=12
)

# Save the chart
fig.write_image("lumina_feature_breakdown.png")