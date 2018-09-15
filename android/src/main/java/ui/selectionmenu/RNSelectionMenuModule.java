
package ui.selectionmenu;

import android.content.Intent;
import android.graphics.Typeface;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.irozon.alertview.AlertActionStyle;
import com.irozon.alertview.AlertStyle;
import com.irozon.alertview.AlertView;
import com.irozon.alertview.interfaces.AlertActionListener;
import com.irozon.alertview.objects.AlertAction;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;

import ir.mirrajabi.searchdialog.SimpleSearchDialogCompat;
import ir.mirrajabi.searchdialog.core.BaseSearchDialogCompat;
import ir.mirrajabi.searchdialog.core.SearchResultListener;
import ir.mirrajabi.searchdialog.core.Searchable;

public class RNSelectionMenuModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNSelectionMenuModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNSelectionMenu";
  }

  @ReactMethod
  public void Show(final ReadableMap props) {

    ReadableArray values = props.getArray("values");
    ReadableArray selectedValues = props.getArray("selectedValues");

    int selectionType = props.getInt("selectionType");
    int presentationType = props.getInt("presentationType");

    String tickColor = props.getString("tickColor");
    String title = props.getString("title");
    String actionTitle = props.getString("actionTitle");

    boolean enableSearch = props.getBoolean("enableSearch");
    String searchPlaceholder = props.getString("searchPlaceholder");
    String searchTintColor = props.getString("searchTintColor");

    AlertView alert = new AlertView(title, "Message", AlertStyle.BOTTOM_SHEET);
    if (presentationType == 0 || presentationType == 1) {
      if (presentationType == 0) {
        alert = new AlertView(title, "Message", AlertStyle.IOS);
      } else if (presentationType == 1) {
        alert = new AlertView(title, "Message", AlertStyle.DIALOG);
      }

      for (int i = 0;i < values.size();i++) {
        alert.addAction(new AlertAction(values.getString(i), AlertActionStyle.DEFAULT, new AlertActionListener() {
          @Override
          public void onActionClick(@NotNull AlertAction action) {
          }
        }));
      }

      alert.show(getCurrentActivity());
    } else if (presentationType == 2) {
      ArrayList<SampleModel> items = new ArrayList<>();
      for (int i = 0;i < values.size();i++) {
        items.add(new SampleModel(values.getString(i)));
      }

      SimpleSearchDialogCompat dialog = new SimpleSearchDialogCompat(getCurrentActivity(), title,
              searchPlaceholder, null, items,
              new SearchResultListener<SampleModel>() {
                @Override
                public void onSelected(BaseSearchDialogCompat dialog,
                                       SampleModel item, int position) {
                  dialog.dismiss();
                }
              });


      dialog.show();
      dialog.getSearchBox().setTypeface(Typeface.SERIF);
    }
  }

  private class SampleModel implements Searchable {
    private String mTitle;

    public SampleModel(String title) {
      mTitle = title;
    }

    @Override
    public String getTitle() {
      return mTitle;
    }

    public SampleModel setTitle(String title) {
      mTitle = title;
      return this;
    }
  }
}