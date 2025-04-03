FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/config-server-*.jar app.jar
EXPOSE 8888
ENTRYPOINT ["java", "-Xms128m", "-Xmx384m", "-jar", "app.jar"]
