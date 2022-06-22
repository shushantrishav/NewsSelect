import csv
from django.shortcuts import render
from .models import Article

def get_publisher_slug_from_url(url):
    """
    Determines the publisher slug based on keywords found in the given URL.
    """
    publisher_keywords = {
        'hindustantimes.com': 'hindustantimes',
        'thenewsminute.com': 'thenewsminute',
        'news18.com': 'news18',
        'reuters.com': 'reuters',
        'aninews.in': 'aninews',
        'theprint.in': 'theprint',
        'timesnownews.com': 'timesnow',
    }

    for keyword, slug in publisher_keywords.items():
        if keyword in url:
            return slug
    return 'unknown'


def render_content(filename):
    articles = []
    with open(filename, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Get the read_more_url from the current row
            read_more_url = row['read_more']

            # Use the helper function to determine the publisher_slug
            publisher_slug = get_publisher_slug_from_url(read_more_url)

            article = Article(
                headline=row['headlines'],
                date = row['date'],
                time = row['time'],
                image_url=row['image_url'],
                text=row['summary'],
                read_more_url=row['read_more'],
                publisher_slug=publisher_slug # Assign the determined slug here
            )
            articles.append(article)
    return articles


def article_misc(request):
    file_misc =  './Backend/Static/output_misc_fin.csv'
    articles = render_content(file_misc)
    return render(request, 'index.html', {'articles': articles})
def article_pol(request):
    file_misc =  './Backend/Static/output_pol_fin.csv'
    articles = render_content(file_misc)
    return render(request, 'index.html', {'articles': articles})
def article_world(request):
    file_misc =  './Backend/Static/output_worl_fin.csv'
    articles = render_content(file_misc)
    return render(request, 'index.html', {'articles': articles})

def article_tech(request):
    file_misc =  './Backend/Static/output_tech_fin.csv'
    articles = render_content(file_misc)
    return render(request, 'index.html', {'articles': articles})