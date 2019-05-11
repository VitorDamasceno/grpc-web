FROM alpine:latest

RUN apk update && apk upgrade && apk --no-cache add bash ca-certificates

RUN apk add --update tzdata
ENV TZ=America/Los_Angeles

ENV APP_PATH /usr/local/hellogrpc

WORKDIR ${APP_PATH}
COPY app .

CMD ${APP_PATH}/app