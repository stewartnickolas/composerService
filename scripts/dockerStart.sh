
export MONGO_BASE_URL=mongodb://host.docker.internal:27017 
export EDC_ENDPOINT=http://host.docker.internal:8081/edc/api/internal/v1
# 6eaedc05a7375c18320f5fc9125bcaf9a05c00fe  eds hash
docker run  \
    -d  \
    -p 8090:8090/tcp \
    --name ms-study_builder \
    --expose 8090  \
    --env NODE_ENV=$NODE_ENV \
    --env MONGO_BASE_URL=$MONGO_BASE_URL \
    --env EDC_ENDPOINT=$EDC_ENDPOINT \
    ms-study_builder:latest