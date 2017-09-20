/*
 * Moosend API
 * TODO: Add a description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets ShortBy
 */
@JsonAdapter(ShortBy.Adapter.class)
public enum ShortBy {
  
  NAME("Name"),
  
  SUBJECT("Subject"),
  
  STATUS("Status"),
  
  DELIVEREDON("DeliveredOn"),
  
  CREATEDON("CreatedOn");

  private String value;

  ShortBy(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ShortBy fromValue(String text) {
    for (ShortBy b : ShortBy.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<ShortBy> {
    @Override
    public void write(final JsonWriter jsonWriter, final ShortBy enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public ShortBy read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return ShortBy.fromValue(String.valueOf(value));
    }
  }
}
