FROM openjdk:17-jdk-slim
WORKDIR /app
COPY . .
RUN chmod +x mvnw && ./mvnw clean install -DskipTests
CMD ["java", "-jar", "target/spy-game-1.0.jar"]