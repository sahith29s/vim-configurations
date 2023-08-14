from rest_framework import serializers
from api.models import Company

# create seriailizers 

class companySerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model : Company
        fields = "__all__"