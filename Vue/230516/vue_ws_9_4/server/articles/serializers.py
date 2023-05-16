from rest_framework import serializers
from .models import Article
from django.contrib.auth import get_user_model


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username')


class ArticleListSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(source='user')
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'created_at', 'updated_at', 'author')
        



class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(source='user', read_only=True)
    class Meta:
        model = Article
        fields = ('id', 'author', 'title', 'content', 'created_at', 'updated_at')
 
        



