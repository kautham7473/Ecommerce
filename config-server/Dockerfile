FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/config-server-*.jar app.jar
EXPOSE 8888
ENTRYPOINT ["java", "-Xms128m", "-Xmx384m", "-jar", "app.jar"]
